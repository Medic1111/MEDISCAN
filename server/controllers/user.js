const User = require("../models/user");
const handleAsync = require("../utils/handle_async");
const AppError = require("../utils/app_error");
const jwt = require("jsonwebtoken");

const getUser = handleAsync(async (req, res, next) => {
  let user = await User.findById({ _id: req.params.id });
  if (!user) return next(new AppError("User not found", 404));
  res.status(200).json(user);
});

const patchUser = handleAsync(async (req, res, next) => {
  let token = req.cookie.jwt || req.headers.authorization.slice(7);
  if (!token) return next(new AppError("No token provided", 401));
  jwt.verify(token, process.env.TOKEN_SECRET, async (err, tokenSpec) => {
    if (err) return next(new AppError("Invalid or Expired Token", 401));
    if (!tokenSpec || !tokenSpec.username)
      return next(new AppError("Invalid Token", 401));
    let updatedUser = await User.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json(updatedUser);
  });
});

const userControl = {
  getUser,
  patchUser,
};

module.exports = userControl;
