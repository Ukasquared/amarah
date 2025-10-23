import { MongoClient, ServerApiVersion, Db } from 'mongodb'
import { databaseConfig } from '.';

const uri = databaseConfig.MONGO_URI
let database: Db;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function runMongoConnection() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    database = client.db("amara_db");
    await database.command({ping: 2})
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return database
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}


export const getDb = () => database
