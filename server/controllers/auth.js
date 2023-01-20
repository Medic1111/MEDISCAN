const User = require("../models/user");
const AppError = require("../utils/app_error");
const handleAsync = require("../utils/handle_async");
const jwt = require("jsonwebtoken");

const login = handleAsync(async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username }).select(
    "+password"
  );
  if (!user)
    return next(new AppError("No users found with that username", 404));

  if (!(await user.decrypt(req.body.password, user.password)))
    return next(new AppError("Incorrect password", 401));

  user.password = null;
  res.status(200).json(user);
});

const register = handleAsync(async (req, res, next) => {
  const user = await User.create(req.body);
  user.password = null;
  res.status(201).json(user);
});

const logout = (req, res, next) => {
  res.cookie("jwt", "LOGGED_OUT", {
    maxAge: 100,
    secure: true,
    httpOnly: true,
  });

  res.status(200).json({ message: "Logged out" });
};

const validate = handleAsync(async (req, res, next) => {
  let token = req.cookie.jwt || req.headers.authorization.slice(7);
  if (!token) return next(new AppError("No token provided", 401));
  jwt.verify(token, process.env.TOKEN_SECRET, async (err, tokenSpec) => {
    if (err) return next(new AppError("Invalid or Expired Token", 401));
    if (!tokenSpec || !tokenSpec.username)
      return next(new AppError("Invalid Token", 401));
    let user = await User.findOne({ username: tokenSpec.username });
    res.status(200).json(user);
  });
});

const authControl = {
  login,
  register,
  logout,
  validate,
};

module.exports = authControl;
