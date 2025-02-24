import { MongoClient } from "mongodb";
import { configDotenv } from "dotenv";

export async function getTheaters() {
  configDotenv();
  const uri = process.env.MONGODB_URL || "";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const dbName = "sample_mflix";
    const collectionName = "theaters";
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    const theaters = await collection.find().limit(10).toArray();
    return theaters;
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}
// getMovies().catch(console.dir);
