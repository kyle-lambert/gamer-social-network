const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../../models/user");

// @route    POST api/auth
// @desc     Authenticate user and get token
// @access   Public

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    try {
      const user = await User.findOne({ email });

      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
          const JWT_SECRET = process.env.JWT_SECRET;
          const payload = {
            id: user.id,
          };

          jwt.sign(payload, JWT_SECRET, (error, token) => {
            if (error) {
              res.status(500).json({ msg: "Unable to generate JWT." });
            } else {
              res.json({
                token,
                user: {
                  id: user.id,
                  firstName: user.firstName,
                  lastName: user.lastName,
                },
              });
            }
          });
        } else {
          res.status(400).json({
            msg: "Invalid credentials.",
          });
        }
      } else {
        res.status(400).json({
          msg: "User with this email does not exist.",
        });
      }
    } catch (error) {
      res.status(500).send("Server error");
      console.error(error.message);
    }
  } else {
    res.status(400).json({ msg: "Fields are required." });
  }
});

module.exports = router;
