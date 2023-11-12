const express = require("express");
const isEmailProvided = require("./middleware/middleware");
const app = express();

// this is to avoid multiple  writing one by on in routes e.g app.get('/', filterFun, () => )
const route = express.Router();

app.listen(5000, () => {
  console.log("Your api is running on 5000 port 😒");
});

// this will work as filter middleware ( this is example of application level middleware)
const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please enter age");
  } else if (req.query.age < 18) {
    res.send("You are not old enough");
  } else {
    next();
  }
};

//? Here we use our middleware this will applicable on application label
// app.use(reqFilter);

// here also need to pass your middle ware to route so this will effect
route.use(isEmailProvided);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/home", (req, res) => {
  res.send("This is home page");
});

//? if you want to add middleware in a specific route then
const ifEmailProvided = (req, res, next) => {
  if (!req.query.email) {
    res.send("Please enter email");
  } else {
    next();
  }
};

route.get("/about", (req, res) => {
  res.send("This is about page");
});

route.get("/contact", (req, res) => {
  res.send("This is contact page");
});

route.get("/help", (req, res) => {
  res.send("This is help page");
});

app.use("/", route);
