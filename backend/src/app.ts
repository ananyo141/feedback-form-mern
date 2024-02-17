import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import feedbackRouter from "./routes/feedback.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (_req: Request, _res: Response) =>
  _res.status(200).send({ message: "Hello World!" }),
);

app.post("/name", (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send({ message: "Name is required" });
  }
  res.status(200).send({ message: `Hello ${name}!` });
})

app.use("/feedback", feedbackRouter);

const port = process.env.PORT || 3000;

try {
  // connect to database
  // if (!process.env.MONGO_URI)
  //   throw new Error("No connection string found in .env file");

  // Server setup
  app.listen(port, () => {
    console.log(`Server listening on -> PORT ${port}`);
  });
} catch (error) {
  console.error(error);
}
