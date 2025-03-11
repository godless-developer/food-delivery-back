import express from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { connectMongoDb } from "./database/db";
import foodsRouter from "./routes/user.route";
import cors from "cors";
const app = express();
configDotenv();
connectMongoDb();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());
app.use("/categories", foodsRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
