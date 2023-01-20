const jwt = require("jsonwebtoken");

const signToken = (username) => {
  return jwt.sign({ username }, process.env.TOKEN_SECRET, { expiresIn: "1hr" });
};

module.exports = signToken;
