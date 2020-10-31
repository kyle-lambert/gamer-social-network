const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../../models/user");

// @route    POST api/users
// @desc     Register new user
// @access   Public

router.post("/", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (firstName && lastName && email && password) {
    try {
      const isUser = await User.findOne({ email });

      if (isUser) {
        res.json({ msg: "A user with this email already exists." });
      } else {
        const newUser = new User({
          firstName,
          lastName,
          email,
          password,
        });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        newUser.password = hashedPassword;

        await newUser.save();

        res.json({ newUser });
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
