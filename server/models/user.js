const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter your name"],
    minLength: [4, "Name should be atleast 4 characters"],
    maxLength: [30, "Name cannot exceed 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: [true, "Email is already in use, please use another email"],
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [8, "Name should be atleast 8 characters"],
    maxLength: [30, "Name cannot exceed 30 characters"],
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

userSchema.method.getJWTToken = function () {
  return jwt.sign({ id: this.id }, process.env.TOKEN_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRE,
  });
};

module.exports = mongoose.model("User", userSchema);
