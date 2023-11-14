const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/Sumit";

// connect to mongoose
mongoose.connect(url),
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

// define schema
// ? here we cerate what field should be allow in db or it's type of after validation.
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  age: Number,
  isActive: Boolean,
});

//? this will be useful in scenario when we want to create some
// const userSchema = new mongoose.Schema(
//   {
// Schema definition
//   },
//   { collection: "my_custom_users_collection" }
// );

// create a model
// here it actual connect our db to node JS after merging user schema.
// ? Note in mongoDb db name automatically convert in plural and lowercase.
const User = mongoose.model("users", userSchema);

//* CRUD with mongoose

//* Create
// this is to add many data using promise.
const createMany = () => {
  // here we add new data in chunk to db.
  // let newUser = [
  //   {
  //     username: "JohnDoe",
  //     email: "john@example.com",
  //     age: 25,
  //     isActive: true,
  //   },
  //   {
  //     username: "AliceSmith",
  //     email: "alice@example.com",
  //     age: 30,
  //     isActive: false,
  //   },
  //   {
  //     username: "BobJohnson",
  //     email: "bob@example.com",
  //     age: 22,
  //     isActive: true,
  //   },
  //   {
  //     username: "EmilyBrown",
  //     email: "emily@example.com",
  //     age: 28,
  //     isActive: true,
  //   },
  //   {
  //     username: "DavidClark",
  //     email: "david@example.com",
  //     age: 35,
  //     isActive: false,
  //   },
  //   {
  //     username: "SophiaLee",
  //     email: "sophia@example.com",
  //     age: 29,
  //     isActive: true,
  //   },
  //   {
  //     username: "OliverTaylor",
  //     email: "oliver@example.com",
  //     age: 26,
  //     isActive: false,
  //   },
  //   {
  //     username: "EmmaMartinez",
  //     email: "emma@example.com",
  //     age: 31,
  //     isActive: true,
  //   },
  //   {
  //     username: "LiamLopez",
  //     email: "liam@example.com",
  //     age: 27,
  //     isActive: false,
  //   },
  //   {
  //     username: "AvaHarris",
  //     email: "ava@example.com",
  //     age: 23,
  //     isActive: true,
  //   },
  //   {
  //     username: "MiaGarcia",
  //     email: "mia@example.com",
  //     age: 32,
  //     isActive: true,
  //   },
  //   {
  //     username: "LucasWilson",
  //     email: "lucas@example.com",
  //     age: 24,
  //     isActive: false,
  //   },
  //   {
  //     username: "EllaRodriguez",
  //     email: "ella@example.com",
  //     age: 33,
  //     isActive: true,
  //   },
  //   {
  //     username: "NoahMiller",
  //     email: "noah@example.com",
  //     age: 21,
  //     isActive: true,
  //   },
  //   {
  //     username: "IsabellaTurner",
  //     email: "isabella@example.com",
  //     age: 34,
  //     isActive: false,
  //   },
  // ];

  User.insertMany(newUser)
    .then((result) => {
      console.log("Inserted chunk successfully", result);
    })
    .catch((err) => {
      console.error("Error while updating data", err);
    });
};
// createMany();

// another way to create data using callback
const anotherWayToCreate = () => {
  let user = new User({
    username: "2nd way to create data",
    email: "2ndWayToCreate@gmail.com",
    age: 2,
    isActive: true,
  });
  user.save((err, userData) => {
    if (err) return console.log("Creating data was unsuccessful", err);
    console.log("Car added:", userData);
  });
};
// anotherWayToCreate();

// here we create with maximum control and using async await method.
const thirdWayToCreate = async () => {
  // this is our data
  const newData = new User({
    username: "Aastha joshi",
    email: "asthajoshi68@gmail.com",
    age: 18,
    isActive: true,
  });

  try {
    // here we gonna insert that data
    const dbRre = await newData.save();
    console.log("Successfully inserted", dbRre);
  } catch (error) {
    console.warn("Unable to data", error);
  }
};
// thirdWayToCreate();

//* Read

const readData = async () => {
  //using callback is deprecated now.
  User.find((err, userData) => {
    if (err) return console.log("Unable to get data", err);
    console.log("Data get successfully", userData);
  });

  // Find all user using promise
  User.find()
    .then((res) => {
      // console.log("Successfully fetch data",res);
    })
    .catch((err) => {
      console.log("Data fetch was successful", err);
    });

  // this using async await
  try {
    const dbRes = await User.find();
    console.log("Successfully fetch data", dbRes);
  } catch (error) {
    console.log("Data fetch was successful", err);
  }
};
// readData();

// read data buy id
const readDataById = async () => {
  //! using callBack ==> which is depreciated.
  // User.findOne({ name: "Aastha Joshi" }, (err, userData) => {
  //   if (err) return console.log("Unable find data", err);
  //   console.log("Here is the user data ", userData);
  // });

  // using promise
  User.findOne({ username: "Aastha Joshi" })
    .then((res) => {
      // console.log("Here is your search data ", res);
    })
    .catch((err) => {
      console.log("Unable to find data because ", err);
    });

  // using async await
  try {
    const dbRes = await User.findOne({ username: "Aastha Joshi" });
    console.log("Here is your data sir ", dbRes);
  } catch (error) {
    console.log("Unable to find data ", error);
  }
};

// readDataById();

//* Update

const updateData = async () => {
  //! using callBack ==>  this is also depreciated
  // User.updateOne(
  //   { username: "Harshil Anghan" },
  //   { $set: { age: 19 } },
  //   (err, userData) => {
  //     if (err) console.log("Unable to update user data", err);
  //     console.log("Data is updated successfully ", userData);
  //   }
  // );
  // using promise

  User.updateOne({ username: "Harshil Anghan" }, { $set: { age: 19 } })
    .then((dbRes) => {
      console.log("Your data updated successfully", dbRes);
    })
    .catch((err) => {
      console.log("Ops, there is an error while updating data", err);
    });

  // using async await
  try {
    const dbRes = await User.updateOne(
      { username: "Harshil Anghan" },
      { age: 25 }
    );

    console.log("Your data updated successfully", dbRes);
  } catch (error) {
    console.log("Ops, unable to update your data", error);
  }
};
// updateData();

// another way of writing same above code
const anotherWayToUpdate = () => {};

//* Delete

const deleteData = async () => {
  //! using callback ==> this is depreciated
  User.deleteOne({ username: "BobJohnson" }, (err, dbRes) => {
    if (err) console.log("Something went wrong", err);
    console.log("Data has been deleted successfullY ", dbRes);
  });

  // by using promise
  User.deleteOne({ username: "LiamLopez" })
    .then((dbRes) => {
      console.log("Data has been deleted successfully", dbRes);
    })
    .catch((err) => {
      console.log("Unable to delete data", err);
    });
  // using async await
  try {
    const dbRes = await User.deleteOne({ username: "AvaHarris" });
    console.log("Data has been deleted successfully", dbRes);
  } catch (error) {
    console.log("Something went wrong while deleting", error);
  }
};
// deleteData();

//* modern approach
// app.post('/cars', async (req, res) => {
//   const { brand, model, year } = req.body;

// Input validation
//   if (!brand || !model || !year) {
//     return res.status(400).json({ error: 'Invalid data. Brand, model, and year are required.' });
//   }

//   const newCar = new Car({ brand, model, year });

//   try {
//     const savedCar = await newCar.save();
//     return res.status(201).json({ message: 'Car added successfully', car: savedCar });
//   } catch (err) {
//     console.error('Error adding a new car:', err);
//     return res.status(500).json({ error: 'Failed to add a new car. Please try again.' });
//   }
// });
