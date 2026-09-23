import express from "express";
import cors from "cors";
import { collections } from "./data/collections.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    message: "Still & Wild API is running",
  });
});

app.get("/api/collections", (req, res) => {
  res.json(collections);
});

app.get("/api/collections/:id", (req, res) => {
  const collection = collections.find(
    (collection) => collection.id === req.params.id
  );

  if (!collection) {
    return res.status(404).json({
      message: "Collection not found",
    });
  }

  res.json(collection);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});