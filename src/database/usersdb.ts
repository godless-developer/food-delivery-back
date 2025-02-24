import { configDotenv } from "dotenv";
import { MongoClient } from "mongodb";

export async function getUsers() {
  configDotenv();
  const uri = process.env.MONGODB_URL || "";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const dbName = "sample_mflix";
    const dbCollection = "users";
    const database = client.db(dbName);
    const collection = database.collection(dbCollection);
    const users = await collection.find().limit(10).toArray();
    return users;
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}
