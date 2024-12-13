import { ConnectToDb } from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const data = await request.json();
    const db = await ConnectToDb();
    const collection = db.collection("researches");

    const unique_ = `${Date.now()}${data.research_img_link}`;
    const unique = await bcrypt.hash(unique_, 10);

    console.log(data.research_img_link);

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
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
