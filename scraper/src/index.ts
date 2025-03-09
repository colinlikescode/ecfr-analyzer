import express from 'express';
import { downloadAndUploadAllTitles } from './functions/download_titles';
import { fetchAndStoreAgencies } from './functions/agencies';
import { countCfrWords } from './functions/count_cfr_words';

const app = express();
const port = 3000;

// curl -X GET http://localhost:3000/download-titles
// API 1

app.get('/download-titles', async (_req, res) => {
  try {
    // Download and upload all titles for March 9th
    const results = await downloadAndUploadAllTitles();

    res.json({
      results,
    });
  } catch (error: any) {
    console.error('Error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// curl -X GET http://localhost:3000/fetch-agencies
// API 2

app.get('/fetch-agencies', async (_req, res) => {
  try {
    const count = await fetchAndStoreAgencies();
    res.json({ message: `Fetched and stored ${count} agencies.` });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// curl -X GET http://localhost:3000/count-cfr-words
// API 3

app.get('/count-cfr-words', async (_req, res) => {
  try {
    const results = await countCfrWords();
    res.json({
      message: `Processed word counts for ${results.length} agencies.`,
      results,
    });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});
