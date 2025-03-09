import axios from 'axios';
import { S3Client } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Hardcoded dates
const MARCH_DATE_2025 = '2025-03-01';
const MARCH_DATE_2024 = '2024-03-01';
const MARCH_DATE_2023 = '2023-03-01';

// Define the title numbers to fetch
const TITLE_NUMBERS = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '50',
];

// S3 client
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

/**
 * Format date as YYYY-MM-DD
 */
export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Creates a delay of specified milliseconds
 */
const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Download a title XML from the eCFR API with limited retry logic
 */
export const downloadTitle = async (titleNumber: string, date: string, maxRetries = 2): Promise<Buffer | null> => {
  let retries = 0;
  let backoffDelay = 5000; // Starting with 5 seconds

  // Use a 2-minute timeout for all files
  const timeout = 120000; // 2 minutes

  while (retries <= maxRetries) {
    try {
      const url = `${process.env.ECFR_API_BASE}/full/${date}/title-${titleNumber}.xml`;
      console.log(`Downloading title ${titleNumber} for date ${date} from ${url}`);
      console.log(`Using timeout of ${timeout / 1000} seconds (${timeout / 60000} minutes)`);

      const response = await axios.get(url, {
        responseType: 'arraybuffer',
        timeout: timeout,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      });

      console.log(`Successfully downloaded title ${titleNumber} (${response.data.length} bytes)`);
      return Buffer.from(response.data);
    } catch (error: any) {
      retries++;

      if (retries <= maxRetries) {
        console.log(
          `Retry ${retries}/${maxRetries} for title ${titleNumber} after ${timeout / 1000} seconds... (Error: ${
            error.message
          })`,
        );
        await delay(backoffDelay);
        backoffDelay *= 2; // Exponential backoff
        continue;
      }

      console.log(`⚠️ Skipping title ${titleNumber} after ${maxRetries} failed attempts: ${error.message}`);
      return null;
    }
  }

  return null;
};

/**
 * Upload data to S3
 */
export const uploadToS3 = async (data: Buffer, key: string): Promise<boolean> => {
  try {
    const upload = new Upload({
      client: s3Client,
      params: {
        Bucket: process.env.AWS_S3_BUCKET || '',
        Key: key,
        Body: data,
        ContentType: 'application/xml',
      },
    });

    await upload.done();
    console.log(`Successfully uploaded ${key} to S3`);
    return true;
  } catch (error: any) {
    console.error(`Error uploading to S3: ${error.message}`);
    return false;
  }
};

/**
 * Process a single title for a specific date - download and upload to S3
 */
export const processSingleTitle = async (
  titleNumber: string,
  date: string,
): Promise<{ title: string; success: boolean }> => {
  try {
    // Download the title for the specific date
    const titleData = await downloadTitle(titleNumber, date);

    if (!titleData) {
      return { title: titleNumber, success: false };
    }

    // Create the key with the date prefix: YYYY-MM-DD-title-N.xml
    const key = `${date}-title-${titleNumber}.xml`;
    console.log(`Uploading to S3 with key: ${key}`);

    const uploadSuccess = await uploadToS3(titleData, key);

    if (!uploadSuccess) {
      console.error(`Failed to upload ${key}`);
      return { title: titleNumber, success: false };
    } else {
      console.log(`Successfully uploaded ${key}`);
      return { title: titleNumber, success: true };
    }
  } catch (error: any) {
    console.error(`Error processing title ${titleNumber}: ${error.message}`);
    return { title: titleNumber, success: false };
  }
};

/**
 * Download all titles and upload to S3 for multiple date periods (2023, 2024, 2025)
 * Process by date period: first all titles for 2023, then 2024, then 2025
 */
export const downloadAndUploadAllTitles = async (): Promise<{
  success: number;
  failed: number;
  titles: { title: string; date: string; success: boolean }[];
}> => {
  // Process by date periods (2023, 2024, 2025)
  const dates = [MARCH_DATE_2023, MARCH_DATE_2024, MARCH_DATE_2025];
  const allResults: { title: string; date: string; success: boolean }[] = [];

  for (const date of dates) {
    console.log(`\n=== PROCESSING TITLES FOR DATE: ${date} ===\n`);

    // Process each title for the current date
    for (const titleNumber of TITLE_NUMBERS) {
      console.log(`\nProcessing title ${titleNumber} for date ${date}...`);

      const result = await processSingleTitle(titleNumber, date);
      allResults.push({ ...result, date });

      if (!result.success) {
        console.log(`⚠️ Title ${titleNumber} for ${date} processing was unsuccessful - continuing with next title`);
      } else {
        console.log(`✅ Title ${titleNumber} for ${date} successfully downloaded and uploaded to S3`);
      }

      // Add a delay before processing the next title (except for the last one)
      if (titleNumber !== TITLE_NUMBERS[TITLE_NUMBERS.length - 1]) {
        console.log(`Waiting 5 seconds before processing the next title...`);
        await delay(5000); // 5-second delay between titles
      }
    }

    console.log(`\n=== COMPLETED ALL TITLES FOR DATE: ${date} ===\n`);
  }

  // Count successes and failures
  const successCount = allResults.filter((result) => result.success).length;
  const failedCount = allResults.length - successCount;

  console.log(`\n=== DOWNLOAD SUMMARY ===`);
  console.log(`Total files processed: ${allResults.length}`);
  console.log(`Successfully processed: ${successCount}`);
  console.log(`Failed/Skipped: ${failedCount}`);

  if (failedCount > 0) {
    console.log(`\nFailed files:`);
    allResults.filter((r) => !r.success).forEach((r) => console.log(`- Title ${r.title} for date ${r.date}`));
  }

  return {
    success: successCount,
    failed: failedCount,
    titles: allResults,
  };
};

export default {
  downloadAndUploadAllTitles,
};
