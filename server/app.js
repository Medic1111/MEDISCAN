// MODULES
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const limiter = require("express-rate-limit");
const sanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const hpp = require("hpp");
const morgan = require("morgan");
const xss = require("xss-clean");
const path = require("path");
require("dotenv").config();
const app = express();

// MIDDLEWARE
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(helmet());
app.use(hpp());
app.use(xss());
app.use(sanitize());
app.use(cookieParser());
// SET LIMIT

// UNHANDLED/ UNIVERSAL

if (process.env.NODE_ENV === "production") {
  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
} else {
  app.all("*", (req, res, next) => {
    next(/*createerrorhandler*/);
  });
}

// ERR HANDLER

app.use((err, req, res, next) => {
  console.log(err);
});

// EXPORT

module.exports = app;
