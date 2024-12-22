import { connectToMongoDB } from "@/pages/lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const db = client.db();
      const categories = await db.collection("categories").find().toArray();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}