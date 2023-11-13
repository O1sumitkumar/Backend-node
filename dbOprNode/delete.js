const dbConnect = require("../config/dbConnection");

// here we delete query single as well as multiple

const deleteQuery = async () => {
  const db = await dbConnect();

  // deleteMultiple({ key:"value" }) this will delete multiple matching
  try {
    const dbRes = await db.deleteOne({ email: "anjaliroy45@gmail.com" });
    console.warn(dbRes);
    if (dbRes.acknowledged) {
      console.log("Successfully deleted");
    }
  } catch (error) {
    console.log(error);
  }
};

deleteQuery.call();
