import express from "express";
import bodyParser from "body-parser";
import { getMovies } from "./database/mongodb";
import { getTheaters } from "./database/theatherdb";
import { getUsers } from "./database/school/studentsDb";
import { createUser } from "./database/school/createStudent";
import { configDotenv } from "dotenv";
const app = express();
configDotenv();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/movies", async (req, res) => {
  try {
    const { year, imdb } = (await req.query) as any;
    const movies = await getMovies(Number(year), Number(imdb));
    res.status(200).json({ message: "success", movies: movies });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", error });
  }
});

app.get("/theaters", async (req, res) => {
  try {
    const theaters = await getTheaters();
    res.status(200).json({ message: "success", theaters: theaters });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", error });
  }
});

app.get("/students", async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json({ message: "success", users: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", error });
  }
});

app.post("/students", async (req, res) => {
  const { studentsData } = req.body;
  console.log(studentsData);
  try {
    const users = await createUser(studentsData);
    res.status(201).json({ message: "added success" });
  } catch (error) {
    res.status(500).json({ messsage: "Error", error });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
