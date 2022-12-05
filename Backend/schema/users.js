let mongoose = require("mongoose");

const userSchema = {
  username: String,
  password: String,
  email: String,
  number: Number,
  city: String,
  name: String,
};
const User = mongoose.model("user", userSchema);

module.exports = User;
