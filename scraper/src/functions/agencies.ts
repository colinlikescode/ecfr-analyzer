import 'dotenv/config';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';
import { randomUUID } from 'crypto';

// Define types for CFR references and agencies
interface CfrReference {
  title: number;
  chapter?: string;
  subtitle?: string;
}

interface Agency {
  name: string;
  short_name: string | null;
  display_name: string;
  sortable_name: string;
  slug: string;
  children?: Agency[];
  cfr_references?: CfrReference[];
}

// Function to handle CFR references
function normalizeCfrReferences(cfrRefs?: CfrReference[]): CfrReference[] {
  if (!cfrRefs) return [];
  return cfrRefs.map((ref) => {
    // Return the reference as is, keeping Roman numerals
    return { ...ref };
  });
}

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchAndStoreAgencies(): Promise<number> {
  try {
    // Tell Axios the type of data we expect back
    const { data } = await axios.get<{ agencies?: Agency[] }>('https://www.ecfr.gov/api/admin/v1/agencies.json', {
      headers: { accept: 'application/json' },
    });

    const agencies = data?.agencies || [];
    if (!Array.isArray(agencies)) {
      throw new Error('No "agencies" array found.');
    }

    const records: Array<Record<string, unknown>> = [];

    for (const agency of agencies) {
      // Parent agency record
      records.push({
        agency_uuid: randomUUID(),
        name: agency.name,
        short_name: agency.short_name,
        display_name: agency.display_name,
        sortable_name: agency.sortable_name,
        slug_id: agency.slug,
        has_child_agencies: Boolean(agency.children?.length),
        child_slug_id: (agency.children || []).map((child) => child.slug),
        cfr_references: normalizeCfrReferences(agency.cfr_references),
        parent_slug_id: null,
      });

      // Child agencies
      if (agency.children && agency.children.length > 0) {
        for (const child of agency.children) {
          records.push({
            agency_uuid: randomUUID(),
            name: child.name,
            short_name: child.short_name,
            display_name: child.display_name,
            sortable_name: child.sortable_name,
            slug_id: child.slug,
            has_child_agencies: false,
            cfr_references: normalizeCfrReferences(child.cfr_references),
            parent_slug_id: agency.slug,
          });
        }
      }
    }

    // Upsert into the "agencies" table using slug_id as the conflict key
    const { error } = await supabase.from('agencies').upsert(records, { onConflict: 'slug_id' });

    if (error) {
      throw new Error(`Failed to insert agencies: ${error.message}`);
    }

    return records.length;
  } catch (err) {
    console.error('Error in fetchAndStoreAgencies:', err);
    throw err;
  }
}
