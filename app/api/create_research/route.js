import { ConnectToDb } from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const data = await request.json();
    const db = await ConnectToDb();
    const collection = db.collection("researches");

    const unique_ = `${Date.now()}${data}`;
    const unique = await bcrypt.hash(unique_, 10);

    const constructing = {
      successful: true,
      unique_key: unique,
    };
    await collection.insertOne({
      ...data,
    });
    return new Response(JSON.stringify(constructing), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
