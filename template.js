const express = require("express");

const app = express();

//? here we inform that you have to use this template to view
app.set("view engine", "ejs");

app.listen(5000, () => {
  console.log("You api is running on port 💁‍♀️ 5000");
});

//? this will automatically call profile page from the view folder as well show dynamic data as well
app.get("/", (_, res) => {
  const user = {
    name: "Sumeet kumar jha",
    email: "sumeetjha365@gmail.com",
    age: 22,
    skills: [
      "html",
      "css",
      "javascript",
      "React",
      "Node",
      "Express",
      "MongoDB",
    ],
  };
  res.render("profile", { user });
});

// this wil, show using common file
//? render is use when we want to render some file onn front end.
app.get("/dashboard", (_, res) => {
  res.render("dashboard");
});
