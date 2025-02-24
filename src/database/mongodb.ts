import { MongoClient } from "mongodb";
import { configDotenv } from "dotenv";

export async function getMovies(year: number, imdb: number) {
  configDotenv();
  const uri = process.env.MONGODB_URL || "";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const dbName = "sample_mflix";
    const collectionName = "movies";
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    const findQuery = {
      $and: [
        {
          "imdb.rating": { $gt: imdb },
        },
        {
          year: { $gt: year },
        },
      ],
    };
    const movies = await collection.find(findQuery).limit(10).toArray();
    return movies;
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}
// getMovies().catch(console.dir);
