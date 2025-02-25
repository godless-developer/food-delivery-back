import { configDotenv } from "dotenv";
import { MongoClient } from "mongodb";

export async function getUsers() {
  configDotenv();
  const uri = process.env.MONGODB_URL || "";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("school");
    const collection = database.collection("students");
    const users = await collection
      .find({
        $and: [{ gpa: { $gte: 3 } }, { gpa: { $lte: 4 } }],
      })
      .toArray();
    return users;
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}
