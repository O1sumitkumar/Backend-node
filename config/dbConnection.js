const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);
const dbName = "Sumit";

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(dbName);
  return db.collection("user");
}
// dbConnect.call();

// dbConnect().then((res) => {
//   let dbRes = res.find({}).toArray();
//   dbRes.then((data) => {
//     console.warn(data);
//   });
//   console.warn(dbRes);
// });

module.exports = dbConnect;
