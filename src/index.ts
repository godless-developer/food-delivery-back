import express from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { connectMongoDb } from "./database/db";
import cors from "cors";
import categoriesRouter from "./routes/categories.route";
import foodsInfoRoute from "./routes/foodsInfo.route";
const app = express();
configDotenv();
connectMongoDb();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());
app.use("/categories", categoriesRouter);
app.use("/foodsInfo", foodsInfoRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
