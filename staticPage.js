const express = require("express");
const path = require("node:path");

//? this will return path of public folder 'path.join function add current directory path with 'public'.
const dirPath = path.join(__dirname, "public");

console.log(dirPath);

// this function uses express framework
const app = express();

// this is to generate static page
//? But the draw back of using static is that this will show the extension .html,.php
// ? this function make available directory path from where all file from directory can be get.
app.use(express.static(dirPath));

//? to hide them we will be using
app.get("", (req, res) => {
  res.sendFile(`${dirPath}/about.html`);
});

//? sendFile is use when we want to send any .html file to populate on front-end
app.get("/about", (req, res) => {
  res.sendFile(`${dirPath}/about.html`);
});

app.get("/help", (req, res) => {
  res.sendFile(`${dirPath}/help.html`);
});

//? this is default page for if route not found
app.get("*", (req, res) => {
  res.sendFile(`${dirPath}/404Page.html`);
});

app.listen(4500, () => {
  console.log("Your api is running on port 4500");
});
