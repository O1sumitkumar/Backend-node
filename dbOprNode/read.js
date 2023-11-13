const dbConnect = require("../config/dbConnection");

// find data
// using async await
const findData = async () => {
  const db = await dbConnect();
  try {
    const dbRes = await db.find({}).toArray();
    console.log(dbRes);
  } catch (err) {
    console.log(err);
  }
};

findData();

// using promise
dbConnect().then((res) => {
  res
    .find()
    .toArray()
    .then((data) => {
      console.warn("😒🤏", data);
    })
    .catch((err) => {
      console.warn(err);
      throw err;
    });
});
