import { MongoClient } from "mongodb";

export async function connectToMongoDB() {
  const client = await MongoClient.connect(
    "mongodb+srv://sindhueducourse:8XvBcR2pLN49VynS@cluster0.aam4u.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0",
  );

  return client;
}
