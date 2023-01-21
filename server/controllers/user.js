const User = require("../models/user");
const handleAsync = require("../utils/handle_async");
const AppError = require("../utils/app_error");

const getUser = handleAsync(async (req, res, next) => {
  let user = await User.findById({ _id: req.params.id });
  if (!user) return next(new AppError("User not found", 404));
  res.status(200).json(user);
});
const patchUser = handleAsync(async (req, res, next) => {
  console.log("PATCHING USER");
});

const userControl = {
  getUser,
  patchUser,
};

module.exports = userControl;
