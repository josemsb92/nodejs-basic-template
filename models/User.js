const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: String, // String is shorthand for {type: String}
  password: String,
  email: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
});

const User = model("User", userSchema);
module.exports = User;
