import OpenAI from "openai";
import "dotenv/config";

// Get Grok API configuration from environment variables
const grokApiKey = process.env.GROK_API_KEY || "";
const grokApiBaseUrl = process.env.GROK_API_BASE_URL || "https://api.x.ai/v1";

// Check if the API key is available
if (!grokApiKey) {
  console.error("Warning: GROK_API_KEY is not set in environment variables");
}

// Initialize the OpenAI client with Grok configuration
const client = new OpenAI({
  apiKey: grokApiKey,
  baseURL: grokApiBaseUrl,
});

/**
 * Interface for the response from the agency explanation service
 */
interface AgencyExplanationResponse {
  explanation: string;
  error?: string;
}

export async function getAgencyExplanation(
  agency_in_charge_name: string,
  dateStr: string
): Promise<AgencyExplanationResponse> {
  try {
    // Check if the API key is available
    if (!grokApiKey) {
      return {
        explanation: "",
        error:
          "Grok API key is not configured. Please set the GROK_API_KEY environment variable.",
      };
    }

    console.log(
      "Processing request for agency:",
      agency_in_charge_name,
      "date:",
      dateStr
    );

    // Since we removed Supabase, we're now assuming the agency information will be provided in a different way
    // or directly in the prompt to Grok.

    try {
      const completion = await client.chat.completions.create({
        model: "grok-2-latest",
        messages: [
          {
            role: "system",
            content:
              "You are Grok. Please follow the instructions exactly. Think hard before you respond",
          },
          {
            role: "user",
            content: `Please provide a less than 60 word 2 paragraph summary of the ${agency_in_charge_name} agency based on your knowledge of its regulations from the ecfr. 
            Please be very blunt with what the agency does, whether its good or bad. No fluff. Reference specific regulations in your summary.
            Remember, 1) you must reference specific regulations (and their numbers) in your summary if possible! This is critical
            Remember, 2) Please provide a less than 70 word 3 paragraphs summary. Also, explain the good and bad of the agency from their regulations.
            Consider information that would be relevant as of ${dateStr}.
            `,
          },
        ],
      });

      console.log("Grok API response:", completion.choices[0].message.content);
      return {
        explanation:
          completion.choices[0].message.content || "No summary available",
      };
    } catch (apiError) {
      const errorMessage =
        apiError instanceof Error ? apiError.message : String(apiError);
      console.error("Error calling Grok API:", errorMessage);
      return {
        explanation: "",
        error: `Error generating explanation: ${errorMessage}`,
      };
    }
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error("Error in getAgencyExplanation:", errorMessage);
    return {
      explanation: "",
      error: `An unexpected error occurred: ${errorMessage}`,
    };
  }
}
