# eCFR Analyzer (4 Folders)

## Website: https://www.ecfr-analyzer-for-america.com

## Frontend

- **Framework:** Next.js, React, TypeScript, Zustand
- **Deployment:** Vercel

## Backend

- **Framework:** Express, Node.js, TypeScript, Grok
- **Deployment:** AWS EC2

## Database

- **Service:** Postgres (via Supabase)

## Scraper

- **Technology:** Node.js, fast-xml-parser + created a custom parser for eCFR's XML data structure
- **Process:**
  1. Fetch XML data from the API endpoint `/api/versioner/v1/full/{date}/title-{title}.xml` to acquire versions of full titles based on specific dates
  2. Upload XML data to AWS S3 for storage
  3. Parse XML data with fast-xml-parser + a custom parser that maps the agency data alongside its corresponding CFR references
  4. Process and store the parsed information in Postgres database (via Supabase)
