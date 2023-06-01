const jwt = require("jsonwebtoken");

const sign = (payload) =>
  jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1h" });

const verify = (payload) => jwt.verify(payload, process.env.SECRET_KEY);

module.exports = {
  sign,
  verify,
};
