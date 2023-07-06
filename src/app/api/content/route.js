import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function POST(req, res) {
  const query = req.body;
  //   console.log(JSON.parse(/query));
  console.log(query);

  try {
    const conn = await client.db("story").collection("short_story");
    const result = await conn.findOne(query);
    delete result["_id"];

    return new Response(JSON.stringify({ result: result }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ Error: err, result: null }), {
      status: 500,
    });
  } finally {
    await client.close();
  }
}
