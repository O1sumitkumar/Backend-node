const mongoose = require("mongoose");

// this is for validation
const userSchema = mongoose.Schema({
  username: String,
  email: String,
  age: Number,
  isActive: Boolean,
});

// here we connect our db collection after merging user schema
module.exports = mongoose.model("users", userSchema);
