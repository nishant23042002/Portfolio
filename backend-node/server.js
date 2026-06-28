/**
 * Express + MongoDB backend for Nishant Sapkal's portfolio (MERN).
 *
 * All routes are mounted under /api so the React frontend can hit them
 * via REACT_APP_BACKEND_URL/api/* with zero changes.
 */
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const contactRoutes = require("./routes/contact");
const availabilityRoutes = require("./routes/availability");
const statusRoutes = require("./routes/status");

const PORT = process.env.PORT || 8001;
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017";
const DB_NAME = process.env.DB_NAME || "portfolio";
const CORS_ORIGINS = (process.env.CORS_ORIGINS || "*")
  .split(",")
  .map((s) => s.trim().replace(/\/+$/, ""))
  .filter(Boolean);

const app = express();

app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));
app.use(
  cors({
    origin: CORS_ORIGINS.includes("*") ? true : CORS_ORIGINS,
    credentials: true,
  })
);

// -------- Routes (mirror the FastAPI surface) --------
const api = express.Router();

api.get("/", (_req, res) => res.json({ message: "Portfolio API up" }));
api.use("/contact", contactRoutes);
api.use("/availability", availabilityRoutes);
api.use("/status", statusRoutes);

app.use("/api", api);

// -------- 404 + error handlers --------
app.use((_req, res) => res.status(404).json({ detail: "Not found" }));

// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ detail: err.message || "Internal server error" });
});

// -------- Boot --------
mongoose
  .connect(MONGO_URL, { dbName: DB_NAME })
  .then(() => {
    console.log(`MongoDB connected → ${DB_NAME}`);
    app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.exit(0);
});
