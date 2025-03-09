/**
 * API client for interacting with the agency explanation endpoints
 */
import { useApiConfigStore } from "../store/apiConfigStore";

/**
 * Interface for agency explanation response
 */
interface AgencyExplanationResponse {
  explanation: string;
  error?: string;
}

/**
 * Options for the agency explanation fetch request
 */
interface AgencyExplanationOptions {
  format?: string;
  selectedDate?: string;
}

export async function fetchAgencyExplanation(
  agencyId: string,
  options?: AgencyExplanationOptions
): Promise<AgencyExplanationResponse> {
  try {
    const selectedDate =
      options?.selectedDate || new Date().toISOString().split("T")[0];

    const baseUrl = useApiConfigStore.getState().baseUrl;
    const response = await fetch(`${baseUrl}/api/agency-explanation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        agency_in_charge_name: agencyId,
        selected_date: selectedDate,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `API request failed with status ${response.status}: ${errorText}`
      );
      return {
        explanation: "",
        error: `Failed to fetch agency explanation. Status: ${response.status}`,
      };
    }

    return await response.json();
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Error fetching agency explanation:", errorMessage);
    return {
      explanation: "",
      error: `An error occurred while fetching the agency explanation: ${errorMessage}`,
    };
  }
}
