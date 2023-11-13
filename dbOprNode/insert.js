const dbConnect = require("../config/dbConnection");

// here we perform insert query in mongodb
// ? In this function we have created single insert as well as multiple insert
const multiInsert = async () => {
  let collection = await dbConnect();
  let dbRes = await collection.insertMany([
    {
      name: "Shruti jha",
      mo: 445555,
      age: 27,
    },
    {
      name: "Shree",
      mo: 445555,
      age: 27,
    },
    {
      name: "Aarush jha",
      mo: 445555,
      age: 27,
    },
  ]);
  console.warn(dbRes);
};
// multiInsert();

// single insert
const singleInsert = async () => {
  const db = await dbConnect();
  const dbRes = await db.insertOne({
    name: "Anjali roy",
    mo: 1234567890,
    email: "anjaliroy45@gmail.com",
    userType: "non-premium",
  });
  console.warn(dbRes);
};

singleInsert();
