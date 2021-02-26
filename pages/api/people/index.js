import { connectToDB } from "../../../utils/db";

export default async function handler(req, res) {
  const { method } = req;
  const db = await connectToDB();

  switch (method) {
    case "POST":
      await db.collection("people").insertOne(req.body);
      res.status(200).json({ message: "Successfully created person" });
      break;
    default:
      const people = await db.collection("people").find().toArray();
      res.status(200).json(JSON.stringify(people));
  }
}
