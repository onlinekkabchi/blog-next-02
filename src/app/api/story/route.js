import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function GET(req, res) {
  // const { gt, lt } = await req.json();
  // console.log(gt, lt);

  try {
    const conn = await client.db("story").collection("short_story");
    const result = await conn.find().limit(10).toArray();

    return new Response(JSON.stringify({ result: result }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ Error: err }), { status: 500 });
  } finally {
    await client.close();
  }
}
