import { ConnectToDb } from "@/lib/db";

export async function POST(request) {
  const data = await request.json();
  const db = await ConnectToDb();
  const req = db.collection("users").findOne({ username: data.username });
  return new Response(JSON.stringify({ available: req ? true : false }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
