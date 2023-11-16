const mySql = require("mysql");

const dbConnection = mySql.createConnection({
  host: "localhost//:",
  user: "",
  password: "",
  database: "users",
});

// here we

dbConnection.connect((err) => {
  if (err) return console.log(err);
  console.log("Connected");
});

module.exports = dbConnection;
