import { create } from "zustand";
import { useApiConfigStore } from "./apiConfigStore";

/**
 * Comprehensive agency data interface for the frontend
 */
export interface AgencyData {
  name: string; // Agency name
  uuid: string; // Unique identifier
  subAgencies: number; // Number of child agencies
  parentSlugId: string | null; // Parent agency identifier
  hasChildren: boolean; // Whether this agency has child agencies
  wordCounts: {
    // Word counts for each year
    [year: string]: number; // e.g. "2023": 1588581
  };
  displayName?: string; // Display name if available
  shortName?: string; // Short name if available
}

interface AgencyState {
  agencies: AgencyData[]; // All agency data
  agencyNames: string[]; // Just the names, for dropdowns etc.
  isLoading: boolean;
  error: string | null;
  fetchAgencyData: () => Promise<void>;
  getWordCountForYear: (agencyName: string, year: string) => number | null;
  getSubAgencyCount: (agencyName: string) => number | null;
}

/**
 * Store for managing comprehensive agency data from Supabase
 */
export const useAgencyStore = create<AgencyState>((set, get) => ({
  agencies: [],
  agencyNames: [],
  isLoading: false,
  error: null,

  fetchAgencyData: async () => {
    const baseUrl = useApiConfigStore.getState().baseUrl;

    console.log("Starting API request with base URL:", baseUrl);

    if (!baseUrl) {
      console.error("API base URL not configured!");
      set({ error: "API base URL not configured" });
      return;
    }

    try {
      set({ isLoading: true, error: null });

      const apiUrl = `${baseUrl}/api/agency-data`;
      console.log("Fetching from:", apiUrl);

      // Fetch comprehensive data from the agency-data endpoint
      const response = await fetch(apiUrl);

      console.log("API Response status:", response.status);

      if (!response.ok) {
        throw new Error(`Failed to fetch agency data: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("API Response Data:", data);
      console.log("Agencies received:", data.agencies?.length || 0);

      if (!data.agencies) {
        console.error("Missing agencies array in API response");
        throw new Error("Invalid response format: agencies array not found");
      }

      if (data.agencies && Array.isArray(data.agencies)) {
        console.log(`Received ${data.agencies.length} agencies from API`);

        // Transform the response to our standardized format
        const processedAgencies = data.agencies.map((agency: any) => {
          // Initialize the wordCounts object
          const wordCounts: { [year: string]: number } = {};

          // Extract word counts for each year
          if (agency.word_count) {
            // Process each date key (e.g., "2023-03-01")
            Object.keys(agency.word_count).forEach((dateKey) => {
              const yearData = agency.word_count[dateKey];
              if (yearData && typeof yearData.wordcount === "number") {
                // Extract just the year from the date (e.g., "2023")
                const year = dateKey.split("-")[0];
                // Store the wordcount for that year
                wordCounts[year] = yearData.wordcount;
              }
            });
          }

          // Calculate number of sub-agencies (length of child_slug_id array)
          const subAgencies = Array.isArray(agency.child_slug_id)
            ? agency.child_slug_id.length
            : 0;

          return {
            name: agency.name,
            uuid: agency.agency_uuid,
            subAgencies,
            parentSlugId: agency.parent_slug_id,
            hasChildren: agency.has_child_agencies,
            wordCounts: Object.keys(wordCounts).length > 0 ? wordCounts : {},
            displayName: agency.display_name,
            shortName: agency.short_name,
          };
        });

        const agencyNames = processedAgencies.map(
          (agency: AgencyData) => agency.name
        );
        set({
          agencies: processedAgencies,
          agencyNames,
          isLoading: false,
        });

        console.log(
          "Complete agency data processed:",
          processedAgencies.length
        );
      } else {
        throw new Error("Invalid response format: agencies array not found");
      }
    } catch (error) {
      console.error("Error fetching agency data:", error);
      set({
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
        isLoading: false,
      });
    }
  },

  // Helper function to get word count for a specific agency and year
  getWordCountForYear: (agencyName: string, year: string) => {
    const { agencies } = get();
    const agency = agencies.find((a) => a.name === agencyName);

    if (!agency || !agency.wordCounts || !agency.wordCounts[year]) {
      return null;
    }

    return agency.wordCounts[year];
  },

  // Helper function to get number of sub-agencies for an agency
  getSubAgencyCount: (agencyName: string) => {
    const { agencies } = get();
    const agency = agencies.find((a) => a.name === agencyName);

    if (!agency) {
      return null;
    }

    return agency.subAgencies;
  },
}));
