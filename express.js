const express = require("express");

// Here how we gonna use experss
const app = express();

// this is how we send request query string with html
app.get("/", (req, res) => {
  console.log("=========>>>>>>>>>>>>>", req.query.name);
  // res.send("This is default page");
  res.send(
    `<h1>Welcome ${req.query.name}<h1><a href="/about">About page </a> `
  );
});

app.get("/about", (req, res) => {
  res.send("this is about us page");
});

//? this function will listen on some api port
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

// this is how we send json data
app.get("/json", (req, res) => {
  res.send({ name: " sumit", email: "sumitjha365@gmail.com" });
});

// if you have multiple data thgen you can send as array of object

app.get("/array-data", (re, res) => {
  res.send([
    { name: "Ankit", age: "15" },
    {
      name: "sumit",
      age: "22",
    },
  ]);
});
