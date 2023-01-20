const authRouter = require("express").Router();
const authControl = require("../controllers/auth");
const attachCookie = require("../utils/attach_cookie");

authRouter.route("/login").post(attachCookie, authControl.login);
authRouter.route("/register").post(attachCookie, authControl.register);
authRouter.route("/logout").get(authControl.logout);
authRouter.route("/validate").get(authControl.validate);

module.exports = authRouter;
