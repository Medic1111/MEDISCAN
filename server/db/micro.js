const User = require("../models/user");
const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () => {
  mongoose.set("strictQuery", true);
  await mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("DB READY TO SEED"))
    .catch((err) => console.log(err));
};

const mockClient = {
  username: "Mock Client",
  email: "mockclient@mock.com",
  password: "mockclient",
  allergies: ["pollen"],
  medical_history: ["CHF", "Emphysema", "Asthma"],
  medications: ["inhaler", "Oxygen NC@6lpm"],
};

const seedDB = async () => {
  await connection();
  await User.create(mockClient)
    .then((newUser) => console.log("SEEDED: ", newUser))
    .catch((err) => console.log(err));

  process.exit();
};

const clearDB = async () => {
  await connection();
  await User.deleteMany()
    .then(() => console.log("CLEARED DB"))
    .catch((err) => console.log(err));

  process.exit();
};

if (process.argv[2] === "--seed") return seedDB();
if (process.argv[2] === "--clear") return clearDB();
