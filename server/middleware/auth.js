const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  if (token) {
  } else {
    res.status(401).json({ msg: "Unauthorised access." });
  }
}
