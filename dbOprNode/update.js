const dbConnect = require("../config/dbConnection");

// here we rite function to update values
// ? In this we are updating multiple fields at once
const updateQuery = async () => {
  const db = await dbConnect();
  try {
    const dbRes = await db.updateOne(
      { name: "Anjali roy" },
      { $set: { email: "sumitjha365@gmail.com", mo: 8511760893 } }
    );
    console.warn(dbRes);
  } catch (error) {
    console.log(error);
  }
};
// updateQuery();
