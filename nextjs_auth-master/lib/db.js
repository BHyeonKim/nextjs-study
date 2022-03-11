import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongodb_user}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.xlism.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
  );
  return client;
}
