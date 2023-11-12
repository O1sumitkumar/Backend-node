// We need to create separate middleware file because our project may have multiple middleware so this will be good practice and easy to maintain

module.exports = isEmailProvided = (req, res, next) => {
  if (!req.query.email) {
    res.send("Please provide email 🤏");
  } else {
    next();
  }
};

// module.exports = isAdult = (req, res, next) => {
//   if (!req.query.age) {
//     res.send("Please provide age 😒");
//   } else if (req.query.age < 18) {
//     res.send("You are not an adult 🤣");
//   } else {
//     next();
//   }
// };
