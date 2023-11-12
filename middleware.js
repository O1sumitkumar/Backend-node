const express = require("express");
const isEmailProvided = require("./middleware/middleware");
const app = express();

//? this is to avoid multiple  writing one by one in routes e.g app.get('/', filterFun, () => )
const route = express.Router();

app.listen(5000, () => {
  console.log("Your api is running on 5000 port 😒");
});

//? Here we use our middleware 'NOTE' ==> this will applicable on across application level.
// app.use(reqFilter);

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


//? This is middleware which handles specific filtration in request and response and next will allow to move ahead otherwise this will keep loading at same page.
const ifEmailProvided = (req, res, next) => {
  if (!req.query.email) {
    res.send("Please enter email");
  } else {
    next();
  }
};

//? here also need to pass your middleware to route so this will use your middleware function.
route.use(isEmailProvided);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// ? this route is using middleware individually at route level.
app.get("/home", isEmailProvided, (req, res) => {
  res.send("This is home page");
});


// ? Which ever routes has 'route.get()' will have middleware effect on that.
route.get("/about", (req, res) => {
  res.send("This is about page");
});

route.get("/contact", (req, res) => {
  res.send("This is contact page");
});

route.get("/help", (req, res) => {
  res.send("This is help page");
});

// ? You have to pass route to 'app.use("/",middlewareName)'.
app.use("/", route);
