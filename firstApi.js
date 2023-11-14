const express = require("express");
const mongoDB = require("mongodb");
const dbConnect = require("./config/dbConnection");

//? in   this api we are not using body parser because after 4.6 express version we don't need that instead we are using " app.use(express.json()); " .
const app = express();

//? Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(express.json());

// default route

// GET
app.get("/", async (req, res) => {
  const db = await dbConnect();
  const dbRes = await db.find().toArray();
  //   res.writeHead(200, { "content-type": "application/json" }).end(dbRes);
  res.send(dbRes);
});

//? we can keep route ( '/' ) name same in post and get, according to method this will call.

// POST
app.post("/", async (req, res) => {
  const db = await dbConnect();
  const dbRes = await db.insertMany(req.body);
  console.warn(req.body);
  res.send(
    `Status:${dbRes.acknowledged}, Inserted 💁‍♀️${dbRes.insertedCount} data.`
  );
});

// ? We can even update using post method but that is not recommended.
// PUT
app.put("/:username", async (req, res) => {
  const db = await dbConnect();
  // const dbRes = await db.updateOne({ username: "user14" }, { $set: req.body }); //? here we don't need to pass object because itself its an object.

  const dynamicSearch = await db.updateOne(
    { username: req.params.username },
    { $set: req.body }
  );
  res.send(`Status: ${dynamicSearch.acknowledged}`);
});

// DELETE
app.delete("/:id", async (req, res) => {
  const db = await dbConnect();
  const dbRes = await db.deleteOne({
    _id: new mongoDB.ObjectId(req.params.id),
  });
  res.send(dbRes);
});

app.listen(5000, (err) => {
  console.log("your api is running on port 500🤏");
  if (err) throw err; //  ? this will terminate too.
});
