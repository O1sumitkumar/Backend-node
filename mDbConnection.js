//! In this module we have create connection with MongoDB

const express = require("express");
const { MongoClient } = require("mongodb");

//? this is our path to db.
const url = "mongodb://localhost:27017";

//? for mongodb we are like a client and db as a server.
const client = new MongoClient(url);
const app = express();

// this is our database name
const dataBase = "Sumit";

let dbResData;

// this function will make connection
async function getData() {
  let result = await client.connect();
  let db = result.db(dataBase);
  let collection = db.collection("user");
  let data = await collection.find({}).toArray();
  // console.log(data);
}

// getData();

//* This will be common function.
const dbConnect = async () => {
  let result = await client.connect();
  let db = result.db(dataBase);
  return db.collection("user");
};

//? here we handle promise [ "Using Promise" ]
dbConnect().then((res) => {
  // console.log(res.find().toArray());
  res
    .find()
    .toArray()
    .then((data) => {
      dbResData = data;
    });
});

//? here we handle with [ "async await"]
const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
};
main();

// app.get("/", (req, res) => {
//   res
//     .writeHead(200, {
//       "Content-Type": "application/json",
//       "Accept-Language": "en" | "ar",
//     })
//     .end(dbResData);
// });

// here we make our server port
app.listen(5000, (err) => {
  if (err) throw err;
  console.log("Server is running on port 5000 😒");
});
