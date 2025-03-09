import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Comprehensive interface for agency data from Supabase
 */
export interface AgencyData {
  agency_uuid: string;
  name: string;
  short_name?: string;
  display_name?: string;
  sortable_name?: string;
  slug_id?: string;
  has_child_agencies: boolean;
  child_slug_id: string[];
  cfr_references?: any;
  parent_slug_id?: string;
  word_count?: {
    [dateKey: string]: {
      date: string;
      wordcount: number;
      processed_references?: any[];
    };
  };
}

/**
 * Interface for the response from the agency data service
 */
interface AgencyDataResponse {
  agencies: AgencyData[];
  error?: string;
}

/**
 * Gets comprehensive agency data from the Supabase database
 *
 * @returns {Promise<AgencyDataResponse>} A promise that resolves to an array of agency data
 */
export async function getAgencyData(): Promise<AgencyDataResponse> {
  try {
    console.log("Querying Supabase for complete agency data...");
    console.log("Supabase URL configured:", !!supabaseUrl);
    console.log("Supabase Key configured:", !!supabaseKey);

    // Query ALL fields from the agencies table
    const { data, error } = await supabase
      .from("agencies")
      .select("*") // Query all columns
      .order("name");

    if (error) {
      console.error("Supabase query error:", error.message);
      console.error("Full error:", JSON.stringify(error));
      return {
        agencies: [],
        error: `Failed to query Supabase: ${error.message}`,
      };
    }

    if (!data || data.length === 0) {
      console.warn("No agencies found in Supabase");
      return {
        agencies: [],
        error: "No data found in Supabase database",
      };
    }

    console.log(
      `Retrieved ${data.length} agencies from Supabase with all fields`
    );

    // Log important stats for debugging purposes
    const sampleAgency = data.find((a) => a.name?.includes("Agriculture"));
    if (sampleAgency) {
      console.log(`Sample agency "${sampleAgency.name}":`);
      console.log(`  - UUID: ${sampleAgency.agency_uuid}`);
      console.log(`  - Has child agencies: ${sampleAgency.has_child_agencies}`);
      console.log(
        `  - Number of child slugs: ${sampleAgency.child_slug_id?.length || 0}`
      );
      console.log(
        `  - Word count years: ${
          sampleAgency.word_count
            ? Object.keys(sampleAgency.word_count).join(", ")
            : "none"
        }`
      );

      // Log 2023-2025 word counts if available
      if (sampleAgency.word_count) {
        ["2023-03-01", "2024-03-01", "2025-03-01"].forEach((year) => {
          const count = sampleAgency.word_count?.[year]?.wordcount;
          console.log(`  - ${year} word count: ${count || "not available"}`);
        });
      }
    }

    return {
      agencies: data as AgencyData[],
    };
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error("Error in getAgencyData:", errorMessage);
    return {
      agencies: [],
      error: `Error querying Supabase: ${errorMessage}`,
    };
  }
}
