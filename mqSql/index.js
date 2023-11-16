const express = require("express");
const dbConnect = require("./config/config");

const app = express();

// get
app.get("/users-list", (req, res) => {
  // using promise
  dbConnect
    .query("SELECT * FROM users")
    .then((dbRes) => {
      console.log(res);
      res.status(200).json(dbRes);
    })
    .catch((err) => {
      console.log("err", err);
      res.status(500).send("Internal Server Error");
    });
});

// insert data
app.post("/create-user", async (req, res) => {
  // using async await
  const dbRes = await dbConnect.se;
});



// listening on this server
app.listen(5000, (err) => {
  if (err) throw err;
  console.log("Your api is running on 😒 5000");
});
