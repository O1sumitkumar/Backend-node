const express = require("express");
const path = require("node:path");

const dirPath = path.join(__dirname, "public");

console.log(dirPath);

const app = express();

// this is to generate static page
//? But the draw back opf using sdtatic is that this will show the extenxion .html,.php
app.use(express.static(dirPath));

// to hide them we will be using
app.get("", (req, res) => {
  res.sendFile(`${dirPath}/about.html`);
});

app.get("/about", (req, res) => {
  res.sendFile(`${dirPath}/about.html`);
});

app.get("/help", (req, res) => {
  res.sendFile(`${dirPath}/help.html`);
});

// this is default page for if route not found
app.get("*", (req, res) => {
  res.sendFile(`${dirPath}/404Page.html`);
});

app.listen(4500, () => {
  console.log("Your api is running on port 4500");
});
