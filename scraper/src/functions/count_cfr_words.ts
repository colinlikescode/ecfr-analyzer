import 'dotenv/config';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';
import { XMLParser } from 'fast-xml-parser';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { Readable } from 'stream';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

// Initialize S3 client
const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'us-east-2',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

// Hardcoded dates for the word count
const MARCH_DATE_2023 = '2023-03-01';
const MARCH_DATE_2024 = '2024-03-01';
const MARCH_DATE_2025 = '2025-03-01';

// Available periods for XML files in S3 - will process in this order
const AVAILABLE_PERIODS = [MARCH_DATE_2023, MARCH_DATE_2024, MARCH_DATE_2025];

// Function to get all agencies from the database
async function getAllAgencies() {
  const { data, error } = await supabase
    .from('agencies')
    .select('agency_uuid, name, cfr_references, parent_slug_id, child_slug_id, slug_id');

  if (error) {
    throw new Error(`Failed to fetch agencies: ${error.message}`);
  }

  return data;
}

// Function to stream S3 response to string
async function streamToString(stream: Readable): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on('error', reject);
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
  });
}

// Function to fetch XML content from S3
async function fetchXmlFromS3(bucketName: string, key: string, specificDate?: string): Promise<string> {
  try {
    console.log(`Attempting to fetch ${key} from bucket ${bucketName}`);

    // If a specific date was provided, try that one directly
    if (specificDate) {
      const dateKey = `${specificDate}-${key}`;
      console.log(`Trying specific date: ${dateKey}`);

      try {
        const command = new GetObjectCommand({
          Bucket: bucketName,
          Key: dateKey,
        });

        const response = await s3Client.send(command);

        if (!response.Body) {
          throw new Error('No body in S3 response');
        }

        // Convert the readable stream to a string
        const xmlContent = await streamToString(response.Body as Readable);
        console.log(`Successfully fetched ${dateKey}, content length: ${xmlContent.length}`);
        return xmlContent;
      } catch (dateError: any) {
        console.log(`Could not fetch file with date ${specificDate}: ${dateError.message}`);
        throw dateError; // Re-throw the error since we want to fail if the specific date isn't found
      }
    }

    // Try the original key directly as a fallback (without date prefix)
    console.log(`Trying original key as fallback: ${key}`);
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: key,
    });

    try {
      const response = await s3Client.send(command);

      if (!response.Body) {
        throw new Error('No body in S3 response');
      }

      // Convert the readable stream to a string
      const xmlContent = await streamToString(response.Body as Readable);
      console.log(`Successfully fetched ${key}, content length: ${xmlContent.length}`);
      return xmlContent;
    } catch (error: any) {
      console.error(`Failed to fetch ${key}: ${error.message}`);
      throw error;
    }
  } catch (error: any) {
    console.error(`Error in fetchXmlFromS3: ${error.message}`);
    throw error;
  }
}

// Function to extract specific sections from XML based on CFR reference
function extractRelevantSectionsFromXml(xmlContent: string, reference: any): string {
  try {
    console.log(
      `Parsing XML for Title ${reference.title}${Object.entries(reference)
        .filter(([key]) => key !== 'title')
        .map(([key, value]) => `, ${key}: ${value}`)
        .join('')}`,
    );

    // Helper function to search for any DIV element with specific attribute and type
    const findDivWithAttribute = (attrName: string, attrValue: string | number, divType: string): string => {
      const attrValueStr = attrValue.toString();
      console.log(`Looking for ${divType} ${attrName}="${attrValueStr}" in raw XML`);

      // Find the opening and closing tags with DIV number (1-8) to properly capture nesting
      const findWithNesting = (
        xml: string,
        divNum: number,
        attrName: string,
        attrValue: string,
        divType: string,
      ): string => {
        // Pattern to find the opening tag with specific attributes
        const openingTagPattern = new RegExp(
          `<DIV${divNum}[^>]*${attrName}=["']${attrValue}["'][^>]*TYPE=["']${divType}["'][^>]*>|` +
            `<DIV${divNum}[^>]*TYPE=["']${divType}["'][^>]*${attrName}=["']${attrValue}["'][^>]*>`,
          'i',
        );

        // Find the position of the opening tag
        const openingMatch = openingTagPattern.exec(xml);
        if (!openingMatch) return '';

        const openingPos = openingMatch.index;
        const openingTag = openingMatch[0];

        // Start from the position after the opening tag
        let currentPos = openingPos + openingTag.length;
        let nestingLevel = 1; // We've found one opening tag

        // Find the matching closing tag by tracking nesting level
        const openingDivRegex = new RegExp(`<DIV${divNum}[^>]*>`, 'gi');
        const closingDivRegex = new RegExp(`</DIV${divNum}>`, 'gi');

        while (nestingLevel > 0 && currentPos < xml.length) {
          // Look for the next opening or closing tag
          openingDivRegex.lastIndex = currentPos;
          closingDivRegex.lastIndex = currentPos;

          const nextOpeningMatch = openingDivRegex.exec(xml);
          const nextClosingMatch = closingDivRegex.exec(xml);

          const nextOpeningPos = nextOpeningMatch ? nextOpeningMatch.index : xml.length;
          const nextClosingPos = nextClosingMatch ? nextClosingMatch.index : xml.length;

          if (nextClosingPos < nextOpeningPos) {
            // Found a closing tag first
            nestingLevel--;
            currentPos = nextClosingPos + `</DIV${divNum}>`.length;
          } else if (nextOpeningMatch) {
            // Found another opening tag
            nestingLevel++;
            currentPos = nextOpeningPos + nextOpeningMatch[0].length;
          } else {
            // Couldn't find any more tags
            break;
          }
        }

        if (nestingLevel === 0) {
          // We found a balanced closing tag - extract the entire content
          return xml.substring(openingPos, currentPos);
        }

        return ''; // Couldn't find proper nesting
      };

      // Try with DIV3 first (most common for chapters)
      let content = '';
      for (let divNum = 3; divNum <= 8 && !content; divNum++) {
        content = findWithNesting(xmlContent, divNum, attrName, attrValueStr, divType);
        if (content) {
          console.log(`Found ${divType} ${attrName}="${attrValueStr}" in DIV${divNum} using proper nesting extraction`);
          // Extract just the text content, removing all XML tags
          return cleanExtractedXml(content);
        }
      }

      for (let divNum = 2; divNum >= 1 && !content; divNum--) {
        content = findWithNesting(xmlContent, divNum, attrName, attrValueStr, divType);
        if (content) {
          console.log(`Found ${divType} ${attrName}="${attrValueStr}" in DIV${divNum} using proper nesting extraction`);
          // Extract just the text content, removing all XML tags
          return cleanExtractedXml(content);
        }
      }

      // Fallback to the old regex patterns if nesting extraction fails
      // Pattern 1: <DIVx N="VALUE" TYPE="TYPE">
      const pattern1 = new RegExp(
        `<DIV\\d[^>]*${attrName}=["']${attrValueStr}["'][^>]*TYPE=["']${divType}["'][^>]*>([\\s\\S]*?)</DIV\\d>`,
        'i',
      );

      // Pattern 2: <DIVx TYPE="TYPE" N="VALUE">
      const pattern2 = new RegExp(
        `<DIV\\d[^>]*TYPE=["']${divType}["'][^>]*${attrName}=["']${attrValueStr}["'][^>]*>([\\s\\S]*?)</DIV\\d>`,
        'i',
      );

      // Pattern 3: <DIVx><HEAD>TYPE VALUE</HEAD>
      const pattern3 = new RegExp(
        `<DIV\\d[^>]*>\\s*<HEAD[^>]*>\\s*${divType}\\s+${attrValueStr}[^<]*</HEAD>([\\s\\S]*?)</DIV\\d>`,
        'i',
      );

      const match = xmlContent.match(pattern1) || xmlContent.match(pattern2) || xmlContent.match(pattern3);

      if (match && match[0]) {
        console.log(`Found ${divType} ${attrName}="${attrValueStr}" using fallback regex pattern`);
        // Extract just the text content, removing all XML tags
        return cleanExtractedXml(match[0]);
      }

      console.log(`Could not find ${divType} ${attrName}="${attrValueStr}"`);
      return '';
    };

    // Process each attribute in a prioritized order
    // Start with more specific (deeper) sections and work up to more general ones
    const attributePriority = ['subchapter', 'chapter', 'subtitle', 'part'];

    // Type mapping for different attributes
    const typeMapping: Record<string, string> = {
      chapter: 'CHAPTER',
      subchapter: 'SUBCHAPTER',
      subtitle: 'SUBTITLE',
      part: 'PART',
    };

    // Try to find content for each attribute that exists in the reference
    let extractedContent = '';
    for (const attr of attributePriority) {
      if (reference[attr]) {
        const divType = typeMapping[attr] || attr.toUpperCase();
        const content = findDivWithAttribute('N', reference[attr], divType);

        if (content) {
          if (extractedContent) {
            // If we already have content from a higher priority attribute, append this
            extractedContent += ' ' + content;
          } else {
            // Otherwise, use this as the primary content
            extractedContent = content;
          }
        }
      }
    }

    // If we haven't found anything yet, look for the title
    if (!extractedContent) {
      console.log(`Looking for Title ${reference.title} in raw XML`);

      // Try to find by title attribute
      const titlePattern = new RegExp(`<DIV1[^>]*N=["']${reference.title}["'][^>]*>([\\s\\S]*?)</DIV1>`, 'i');
      const titleMatch = xmlContent.match(titlePattern);

      if (titleMatch && titleMatch[0]) {
        console.log(`Found title by N attribute: ${reference.title}`);
        extractedContent = cleanExtractedXml(titleMatch[0]);
      } else {
        // Try by HEAD content
        const titleHeadPattern = new RegExp(
          `<DIV1[^>]*>\\s*<HEAD[^>]*>\\s*TITLE\\s+${reference.title}[^<]*</HEAD>([\\s\\S]*?)</DIV1>`,
          'i',
        );
        const titleHeadMatch = xmlContent.match(titleHeadPattern);

        if (titleHeadMatch && titleHeadMatch[0]) {
          console.log(`Found title by HEAD content: TITLE ${reference.title}`);
          extractedContent = cleanExtractedXml(titleHeadMatch[0]);
        }
      }
    }

    // If we still couldn't find anything, use a parser as fallback
    if (!extractedContent) {
      console.log('Using XML parser as fallback');
      const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: '@_',
        textNodeName: '#text',
        isArray: (name) => ['DIV1', 'DIV2', 'DIV3', 'DIV4', 'DIV5', 'DIV6', 'DIV7', 'DIV8', 'P'].includes(name),
      });

      try {
        const result = parser.parse(xmlContent);

        // Log appropriate warning based on what we were looking for
        const attributes = Object.entries(reference)
          .filter(([key, value]) => key !== 'title' && value)
          .map(([key, value]) => `${key}=${value}`)
          .join(', ');

        console.warn(
          `Could not find specific content for Title ${reference.title}${
            attributes ? ` with ${attributes}` : ''
          }. Using fallback parser.`,
        );

        // Use our helper function to extract only text content from the parsed XML
        extractedContent = extractTextFromParsedXml(result);
      } catch (parseError) {
        console.error('Error parsing XML with fallback parser:', parseError);

        // Last resort - try to clean the XML content directly
        extractedContent = cleanExtractedXml(xmlContent);
        console.warn('Using raw XML content as last resort');
      }
    }

    // At this point, our text should be mostly clean, but let's ensure there are no XML tags left
    // This helps double-check that we're only counting actual words
    return extractedContent
      .replace(/<[^>]*>/g, ' ') // Remove any remaining XML tags
      .replace(/&[^;]+;/g, ' ') // Remove any remaining HTML entities
      .replace(/[^\w\s]/g, ' ') // Replace special characters with space
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim();
  } catch (error) {
    console.error('Error parsing XML:', error);
    return '';
  }
}

// Function to count words in a string
function countWords(text: string): number {
  // Remove XML tags and special characters, then split by whitespace and count
  const cleanText = text
    .replace(/<[^>]*>/g, ' ') // Remove XML tags
    .replace(/&[^;]+;/g, ' ') // Remove HTML entities
    .replace(/[^\w\s]/g, ' ') // Replace special characters with space
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim();

  // Log a sample of the cleaned text for verification
  const sampleLength = Math.min(cleanText.length, 200);
  console.log(`Word counting sample (first ${sampleLength} chars): "${cleanText.substring(0, sampleLength)}..."`);
  console.log(`Total word count: ${cleanText.split(/\s+/).length}`);

  return cleanText.split(/\s+/).length;
}

// Helper function to clean XML text after extraction
function cleanExtractedXml(xmlContent: string): string {
  return xmlContent
    .replace(/<[^>]*>/g, ' ') // Remove all XML tags
    .replace(/&[^;]+;/g, ' ') // Remove HTML entities
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
}

// Extract text content from parsed XML object
function extractTextFromParsedXml(obj: any): string {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;

  let text = '';

  // Handle arrays
  if (Array.isArray(obj)) {
    for (const item of obj) {
      text += ' ' + extractTextFromParsedXml(item);
    }
    return text;
  }

  // Handle objects - extract text content and ignore attributes
  if (typeof obj === 'object') {
    // Extract direct text content
    if (obj['#text']) {
      text += ' ' + obj['#text'];
    }

    // Recursively process all properties except attributes
    for (const key in obj) {
      if (!key.startsWith('@_')) {
        text += ' ' + extractTextFromParsedXml(obj[key]);
      }
    }
  }

  return text;
}

// Main function to count words in CFR references for all agencies
export async function countCfrWords(): Promise<Record<string, any>[]> {
  try {
    const agencies = await getAllAgencies();
    const allResults: Record<string, any>[] = [];

    console.log(`Processing ${agencies.length} agencies across ${AVAILABLE_PERIODS.length} date periods...`);

    // Process each date period in sequence
    for (const datePeriod of AVAILABLE_PERIODS) {
      console.log(`\n===== PROCESSING DATE PERIOD: ${datePeriod} =====\n`);

      // First, separate agencies into parents and children
      const childAgencies = agencies.filter((agency) => agency.parent_slug_id !== null);
      const parentAgencies = agencies.filter((agency) => agency.parent_slug_id === null);

      console.log(
        `Found ${childAgencies.length} child agencies and ${parentAgencies.length} parent agencies to process for ${datePeriod}`,
      );

      // Create a map to store child word counts by slug_id for this date period
      const childWordCounts = new Map<string, number>();

      // Step 1: Process all child agencies first for this date period
      console.log(`\n===== PROCESSING CHILD AGENCIES FOR ${datePeriod} =====`);

      for (const agency of childAgencies) {
        console.log(`\n----- Processing child agency: ${agency.name} for ${datePeriod} -----`);

        try {
          // Case 1: Agency has no CFR references
          if (!agency.cfr_references || agency.cfr_references.length === 0) {
            console.log(`Child agency ${agency.name} has no CFR references. Setting word count to 0.`);

            // First, read the existing word_count data
            const { data: existingData, error: readError } = await supabase
              .from('agencies')
              .select('word_count')
              .eq('agency_uuid', agency.agency_uuid)
              .single();

            if (readError) {
              console.error(`Failed to read existing word count for agency ${agency.name}:`, readError);
            }

            // Create new word count object with current date's data
            const newWordCount = {
              ...(existingData?.word_count || {}),
              [datePeriod]: {
                wordcount: 0,
                date: datePeriod,
              },
            };

            // Update with merged data
            const { error } = await supabase
              .from('agencies')
              .update({
                word_count: newWordCount,
              })
              .eq('agency_uuid', agency.agency_uuid);

            if (error) {
              console.error(`Failed to update word count for child agency ${agency.name} (${datePeriod}):`, error);
            } else {
              console.log(`✓ Successfully stored word count 0 for child agency ${agency.name} (${datePeriod})`);
            }

            allResults.push({
              agency_uuid: agency.agency_uuid,
              name: agency.name,
              wordcount: 0,
              date: datePeriod,
              is_child: true,
              parent_slug_id: agency.parent_slug_id,
            });

            // Store 0 in our map
            childWordCounts.set(agency.slug_id, 0);

            continue;
          }

          // Case 2: Agency has CFR references to process
          console.log(
            `Child agency ${agency.name} has ${agency.cfr_references.length} CFR references to process for ${datePeriod}.`,
          );

          const processedReferences: any[] = [];
          let combinedText = '';

          // Process each reference
          for (const reference of agency.cfr_references) {
            try {
              console.log(
                `\nProcessing reference: Title ${reference.title}${Object.entries(reference)
                  .filter(([key]) => key !== 'title')
                  .map(([key, value]) => `, ${key}: ${value}`)
                  .join('')} for ${datePeriod}`,
              );

              // Create the S3 key based on the title - don't pad with leading zeros
              const title = reference.title.toString();
              const s3Key = `title-${title}.xml`; // The date prefix will be added by fetchXmlFromS3
              const bucketName = process.env.S3_BUCKET || 'examplebucketedge';

              // Fetch XML content for this specific date period
              const xmlContent = await fetchXmlFromS3(bucketName, s3Key, datePeriod);

              // Extract only the relevant sections based on the CFR reference
              const extractedText = extractRelevantSectionsFromXml(xmlContent, reference);

              // Add to combined text
              combinedText += ' ' + extractedText;

              processedReferences.push({
                title: reference.title,
                ...Object.fromEntries(Object.entries(reference).filter(([key]) => key !== 'title')),
                date: datePeriod,
                status: 'processed',
              });

              console.log(`✓ Successfully processed reference for ${datePeriod}`);
            } catch (error) {
              console.error(`Error processing reference for title ${reference.title} (${datePeriod}):`, error);
              processedReferences.push({
                title: reference.title,
                ...Object.fromEntries(Object.entries(reference).filter(([key]) => key !== 'title')),
                date: datePeriod,
                status: 'error',
                error: `Failed to process: ${error}`,
              });
            }
          }

          // Count words in the combined text from all references
          const totalWordCount = countWords(combinedText);
          console.log(`Total word count for child agency ${agency.name} (${datePeriod}): ${totalWordCount}`);

          // Store the word count in our map for parent agency calculation
          childWordCounts.set(agency.slug_id, totalWordCount);

          // First, read the existing word_count data
          const { data: existingData, error: readError } = await supabase
            .from('agencies')
            .select('word_count')
            .eq('agency_uuid', agency.agency_uuid)
            .single();

          if (readError) {
            console.error(`Failed to read existing word count for agency ${agency.name}:`, readError);
          }

          // Create new word count object with current date's data
          const newWordCount = {
            ...(existingData?.word_count || {}),
            [datePeriod]: {
              wordcount: totalWordCount,
              date: datePeriod,
              processed_references: processedReferences,
            },
          };

          // Update with merged data
          const { error } = await supabase
            .from('agencies')
            .update({
              word_count: newWordCount,
            })
            .eq('agency_uuid', agency.agency_uuid);

          if (error) {
            console.error(`Failed to update word count for child agency ${agency.name} (${datePeriod}):`, error);
            allResults.push({
              agency_uuid: agency.agency_uuid,
              name: agency.name,
              wordcount: totalWordCount,
              date: datePeriod,
              processed_references: processedReferences,
              storage_error: error.message,
              is_child: true,
              parent_slug_id: agency.parent_slug_id,
            });
          } else {
            console.log(
              `✓ Successfully stored word count ${totalWordCount} for child agency ${agency.name} (${datePeriod})`,
            );
            allResults.push({
              agency_uuid: agency.agency_uuid,
              name: agency.name,
              wordcount: totalWordCount,
              date: datePeriod,
              processed_references: processedReferences,
              is_child: true,
              parent_slug_id: agency.parent_slug_id,
            });
          }

          console.log(`----- Completed processing child agency: ${agency.name} for ${datePeriod} -----\n`);
        } catch (agencyError) {
          console.error(`Error processing child agency ${agency.name} (${datePeriod}):`, agencyError);
          allResults.push({
            agency_uuid: agency.agency_uuid,
            name: agency.name,
            date: datePeriod,
            error: `Failed to process: ${agencyError}`,
            is_child: true,
            parent_slug_id: agency.parent_slug_id,
          });
        }
      }

      // Step 2: Process parent agencies and add child word counts for this date period
      console.log(`\n===== PROCESSING PARENT AGENCIES FOR ${datePeriod} =====`);

      for (const agency of parentAgencies) {
        console.log(
          `\n----- Processing parent agency: ${agency.name} (slug_id: ${agency.slug_id}) for ${datePeriod} -----`,
        );

        try {
          // First, calculate the sum of all child word counts
          let childrenWordCountSum = 0;
          const childrenCounted: string[] = [];

          if (agency.child_slug_id && Array.isArray(agency.child_slug_id) && agency.child_slug_id.length > 0) {
            console.log(`Parent agency ${agency.name} has ${agency.child_slug_id.length} children for ${datePeriod}.`);

            for (const childSlugId of agency.child_slug_id) {
              if (childWordCounts.has(childSlugId)) {
                const childCount = childWordCounts.get(childSlugId) || 0;
                childrenWordCountSum += childCount;
                childrenCounted.push(childSlugId);
                console.log(`Added ${childCount} words from child ${childSlugId} for ${datePeriod}`);
              } else {
                console.log(`Warning: Could not find word count for child ${childSlugId} for ${datePeriod}`);
              }
            }

            console.log(`Total word count from children for ${datePeriod}: ${childrenWordCountSum}`);
          } else {
            console.log(`Parent agency ${agency.name} has no children for ${datePeriod}.`);
          }

          // Now process the parent agency's own CFR references
          let parentOwnWordCount = 0;
          const processedReferences: any[] = [];

          // Process parent's own CFR references
          if (!agency.cfr_references || agency.cfr_references.length === 0) {
            console.log(
              `Parent agency ${agency.name} has no direct CFR references of its own for ${datePeriod}. Using only child sum: ${childrenWordCountSum}.`,
            );
            parentOwnWordCount = 0;
          } else {
            // Parent agency has its own CFR references to process
            console.log(
              `Parent agency ${agency.name} has ${agency.cfr_references.length} direct CFR references of its own to process for ${datePeriod}.`,
            );

            let combinedText = '';

            // Process each of the parent's own references
            for (const reference of agency.cfr_references) {
              try {
                console.log(
                  `\nProcessing parent's direct reference: Title ${reference.title}${Object.entries(reference)
                    .filter(([key]) => key !== 'title')
                    .map(([key, value]) => `, ${key}: ${value}`)
                    .join('')} for ${datePeriod}`,
                );

                // Create the S3 key based on the title
                const title = reference.title.toString();
                const s3Key = `title-${title}.xml`; // The date prefix will be added by fetchXmlFromS3
                const bucketName = process.env.S3_BUCKET || 'examplebucketedge';

                // Fetch XML content for this specific date period
                const xmlContent = await fetchXmlFromS3(bucketName, s3Key, datePeriod);

                // Extract only the relevant sections based on the CFR reference
                const extractedText = extractRelevantSectionsFromXml(xmlContent, reference);

                // Add to combined text
                combinedText += ' ' + extractedText;

                processedReferences.push({
                  title: reference.title,
                  ...Object.fromEntries(Object.entries(reference).filter(([key]) => key !== 'title')),
                  date: datePeriod,
                  status: 'processed',
                });

                console.log(`✓ Successfully processed parent's direct reference for ${datePeriod}`);
              } catch (error) {
                console.error(
                  `Error processing parent's reference for title ${reference.title} (${datePeriod}):`,
                  error,
                );
                processedReferences.push({
                  title: reference.title,
                  ...Object.fromEntries(Object.entries(reference).filter(([key]) => key !== 'title')),
                  date: datePeriod,
                  status: 'error',
                  error: `Failed to process: ${error}`,
                });
              }
            }

            // Count words in the parent's own references
            parentOwnWordCount = countWords(combinedText);
            console.log(`Parent agency ${agency.name}'s own word count for ${datePeriod}: ${parentOwnWordCount}`);
          }

          // Calculate total word count (parent's own + sum of all children)
          const totalWordCount = parentOwnWordCount + childrenWordCountSum;
          console.log(`Grand total word count for parent agency ${agency.name} (${datePeriod}): ${totalWordCount}`);

          // First, read the existing word_count data
          const { data: existingData, error: readError } = await supabase
            .from('agencies')
            .select('word_count')
            .eq('agency_uuid', agency.agency_uuid)
            .single();

          if (readError) {
            console.error(`Failed to read existing word count for agency ${agency.name}:`, readError);
          }

          // Create new word count object with current date's data
          const newWordCount = {
            ...(existingData?.word_count || {}),
            [datePeriod]: {
              wordcount: totalWordCount,
              own_wordcount: parentOwnWordCount,
              children_wordcount: childrenWordCountSum,
              children_counted: childrenCounted,
              date: datePeriod,
              processed_references: processedReferences,
            },
          };

          // Update with merged data
          const { error } = await supabase
            .from('agencies')
            .update({
              word_count: newWordCount,
            })
            .eq('agency_uuid', agency.agency_uuid);

          if (error) {
            console.error(`Failed to update word count for parent agency ${agency.name} (${datePeriod}):`, error);
            allResults.push({
              agency_uuid: agency.agency_uuid,
              name: agency.name,
              wordcount: totalWordCount,
              own_wordcount: parentOwnWordCount,
              children_wordcount: childrenWordCountSum,
              children_counted: childrenCounted,
              date: datePeriod,
              processed_references: processedReferences,
              storage_error: error.message,
              is_parent: true,
            });
          } else {
            console.log(
              `✓ Successfully stored grand total word count ${totalWordCount} for parent agency ${agency.name} (${datePeriod})`,
            );
            allResults.push({
              agency_uuid: agency.agency_uuid,
              name: agency.name,
              wordcount: totalWordCount,
              own_wordcount: parentOwnWordCount,
              children_wordcount: childrenWordCountSum,
              children_counted: childrenCounted,
              date: datePeriod,
              processed_references: processedReferences,
              is_parent: true,
            });
          }

          console.log(`----- Completed processing parent agency: ${agency.name} for ${datePeriod} -----\n`);
        } catch (agencyError) {
          console.error(`Error processing parent agency ${agency.name} (${datePeriod}):`, agencyError);
          allResults.push({
            agency_uuid: agency.agency_uuid,
            name: agency.name,
            date: datePeriod,
            error: `Failed to process: ${agencyError}`,
            is_parent: true,
          });
        }
      }

      console.log(`\n===== COMPLETED ALL AGENCIES FOR DATE PERIOD: ${datePeriod} =====\n`);
    }

    console.log(
      `\nCompleted processing all ${agencies.length} agencies across all ${AVAILABLE_PERIODS.length} date periods.`,
    );
    return allResults;
  } catch (error) {
    console.error('Error in countCfrWords:', error);
    throw error;
  }
}
