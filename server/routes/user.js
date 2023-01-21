const userRouter = require("express").Router();
const userControl = require("../controllers/user");

userRouter.route("/:id").get(userControl.getUser).patch(userControl.patchUser);

module.exports = userRouter;
