const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter your name"],
    minLength: [4, "Name should be at least 4 characters"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    unique: [true, "That username is already in use"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: [true, "Email is already in use, please use another email"],
    validate: [validator.isEmail, "Please enter a valid email"],
    unique: [true, "That email is already in registered"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [8, "Password should be atleast 8 characters"],
    maxLength: [30, "Password cannot exceed 30 characters"],
    select: false,
  },
  allergies: {
    type: Array,
    default: [],
  },
  medical_history: {
    type: Array,
    default: [],
  },
  medications: {
    type: Array,
    default: [],
  },
  joinedDate: {
    type: Date,
    default: new Date().toISOString(),
    select: false,
  },
  resetPasswordToken: String,
  resePasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.decrypt = async function (canditate, storedPassword) {
  return await bcrypt.compare(canditate, storedPassword);
};

module.exports = mongoose.model("User", userSchema);
