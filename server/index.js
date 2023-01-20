const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./app");

app.listen(process.env.PORT || 3002, (err) =>
  err ? console.log(err) : console.log("SERVER SPINNING")
);
