const express = require("express");
const multer = require("multer");

// we don't need to store on any variable
require("./config/mgsConfig");
const User = require("./config/users");

const app = express();

// here we stringify data to simple json parse

app.use(express.json());

// file upload using multer

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

const fileUpload = express.Router();

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Welcome to API");
});

app.post("/create", async (req, res) => {
  try {
    if (!req.body) return;
    const newData = new User(req.body);
    const dbRes = await newData.save();
    console.log("Created successfully", dbRes);
    res.send(dbRes);
  } catch (error) {
    console.log("something went wrong", error);
  }
});

//read
app.get("/users-list", async (req, res) => {
  try {
    let dbRes = await User.find();
    res.send(dbRes);
  } catch (error) {}
});

// read by id
app.get("/user/:_id", async (req, res) => {
  try {
    const dbRes = await User.findById(req.params);
    console.log(dbRes);
    res.send(dbRes);
  } catch (error) {}
});

// update
app.put("/update/:_id", async (req, res) => {
  try {
    const dbRes = await User.updateOne(req.params, { $set: req.body });
    // res.status("Updated successfully", dbRes);
    res.status(200).send("Updated successfully");
  } catch (err) {
    res.status(404).send("Not Found");
  }
});

// delete
app.delete("/delete/:_id", async (req, res) => {
  try {
    const dbRes = await User.deleteOne(req.params);
    res.status(200, "Deleted successfully").send(dbRes);
  } catch (error) {
    res.sendStatus(400).send("Bad request");
  }
});

// search

app.get("/search/:key", async (req, res) => {
  try {
    const dbRes = await User.find({
      $or: [
        { username: { $regex: req.params.key } },
        { email: { $regex: req.params.key } },
      ],
    });
    res.send(dbRes);
  } catch (error) {
    console.log(error);
  }
});

// fileUpload.use(upload);
// file upload

app.post("/upload", upload, (req, res) => {
  res.send("file upload");
});

// app.use("fileUpload", fileUpload);

app.listen(5000, (err) => {
  if (err) throw err;
  console.log("Your api is running on port 🤏 5000");
});
