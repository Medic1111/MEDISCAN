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
const AppError = require("./utils/app_error");
const errController = require("./utils/err_handler");
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
process.env.NODE_ENV === "development" && app.use(morgan("dev"));
app.use(
  "/api",
  limiter({
    max: 100,
    window: 60 * 60 * 1000,
    message: "Too many calls from this IP",
  })
);

// ROUTES
const authRouter = require("./routes/auth");

// CONTROL/MIDDLEWARE
app.use("/api/v1/auth", authRouter);

// UNHANDLED/ UNIVERSAL
if (process.env.NODE_ENV === "production") {
  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
} else {
  app.all("*", (req, res, next) => {
    next(new AppError(`${req.originalUrl} not supported`));
  });
}

// ERR HANDLER
app.use(errController);

// EXPORT
module.exports = app;
