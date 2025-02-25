import { configDotenv } from "dotenv";
import { MongoClient } from "mongodb";

export async function createUser(studentsData: any) {
  configDotenv();
  const uri = process.env.MONGODB_URL || "";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("school");
    const collection = database.collection("students");
    await collection.insertMany(studentsData);
  } catch (error) {
    console.log("Error", error);
  }
}
// await collection.insertMany([
//   {
//     name: "jijgee ",
//     email: "tony@15ghj4@gmail.com",
//     password: "23378sdfsa745278",
//   },
//   {
//     name: "tomoo ",
//     email: "tony@15asdadghj4@gmail.com",
//     password: "23378sdf745278",
//   },
//   {
//     name: "tuka ",
//     email: "ttuka@gmail.com",
//     password: "2337sf8745278",
//   },
// ]);
