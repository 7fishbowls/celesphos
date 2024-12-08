import { MongoClient } from "mongodb";

let client;
let db;

export async function ConnectToDb() {
  if (db) return db;
  client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  db = client.db("celesphos");
  return db;
}

export async function CloseConnection() {
  if (client) {
    await client.close();
    db = null;
    client = null;
  }
}
