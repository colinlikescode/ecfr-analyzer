// routes/main.ts

import express from "express";
import { getAgencyExplanation } from "../helpers/grok-agency-explanation";
import { getAgencyData } from "../helpers/get-agency-names";

const router = express.Router();

/* 
API 1: Agency explanation

Gets an explanation of an agency based on its regulations

Endpoint: POST /api/agency-explanation

Request body:
- agency_in_charge_name: String - The name of the agency
- selected_date: String - The date in YYYY-MM-DD format

Response:
- explanation: String - An explanation of the agency

Example cURL Request:
curl -X POST http://localhost:8000/api/agency-explanation \
     -H "Content-Type: application/json" \
     -d '{
       "agency_in_charge_name":"Federal Register Administrative Committee",
       "selected_date":"2024-01-01"
     }'

Response:
{
  "explanation": "The Federal Register Administrative Committee is responsible for..."
}
*/
router.post("/agency-explanation", async (req, res) => {
  try {
    console.log("API 1 RAN");
    const { agency_in_charge_name, selected_date } = req.body;

    if (!agency_in_charge_name || !selected_date) {
      return res.status(400).json({
        error:
          'Missing "agency_in_charge_name" or "selected_date" in request body.',
      });
    }

    const result = await getAgencyExplanation(
      agency_in_charge_name,
      selected_date
    );

    // Check if there was an error
    if (result.error) {
      return res.status(400).json({
        error: result.error,
      });
    }

    return res.json({
      explanation: result.explanation,
    });
  } catch (error) {
    console.error("Error in /agency-explanation endpoint:", error);
    return res.status(500).json({
      error: "An unexpected error occurred while processing your request.",
    });
  }
});

/* 
API 2: Agency data

Gets all agency data including names and word counts directly from Supabase

Endpoint: GET /api/agency-data

Response:
- agencies: Array of Objects - All agency data including names and word counts

Example cURL Request:
curl -X GET http://localhost:8000/api/agency-data

Response:
{
  "agencies": [
    {
      "name": "Department of Agriculture",
      "word_count": {
        "2023-03-01": {
          "date": "2023-03-01",
          "wordcount": 1588581,
          "processed_references": [...]
        },
        "2024-03-01": { ... },
        "2025-03-01": { ... }
      }
    },
    ...
  ]
}
*/
router.get("/agency-data", async (_req, res) => {
  try {
    console.log("API 2 RAN");
    const result = await getAgencyData();

    // Check if there was an error
    if (result.error) {
      return res.status(400).json({
        error: result.error,
      });
    }

    return res.json({
      agencies: result.agencies,
    });
  } catch (error) {
    console.error("Error in /agency-data endpoint:", error);
    return res.status(500).json({
      error: "An unexpected error occurred while processing your request.",
    });
  }
});

export default router;
