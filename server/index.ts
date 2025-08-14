import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { blogs } from "./routes/blogs";
import { photos } from "./routes/photos";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogs);
app.use("/api/photos", photos);

const port = Number(process.env.API_PORT) || 8080;
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
