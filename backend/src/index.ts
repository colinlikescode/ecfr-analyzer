import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
// Import the router
import wordcountRouter from "./routes/main";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Allow requests from any origin
app.use(cors());

app.use(helmet());
app.use(express.json());

// Routes
app.use("/api", wordcountRouter);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    console.error("Unhandled error:", err.stack);
    res.status(500).json({
      error: "Something went wrong!",
      message: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
);

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
