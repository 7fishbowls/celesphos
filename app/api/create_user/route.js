import { ConnectToDb } from "@/lib/db";

export async function POST(request) {
  try {
    const data = await request.json();
    const db = await ConnectToDb();
    const collection = db.collection("users");
    await collection.insertOne(data);

    return new Response(JSON.stringify({ successful: true }), {
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
