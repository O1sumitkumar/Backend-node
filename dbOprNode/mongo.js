const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const dbName = "Sumit";

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(dbName);
  return db.collection("user");
}

// console.warn(dbConnect());

// using promise
dbConnect().then((res) => {
  const dbRes = res.find().toArray();
  //   db
  dbRes.then((data) => {
    // console.warn(data);
  });
});

// using async await
const main = async () => {
  let dbRes = await dbConnect();
  dbRes = await dbRes.find({}).toArray();
  console.warn(dbRes);
};
main.call();
