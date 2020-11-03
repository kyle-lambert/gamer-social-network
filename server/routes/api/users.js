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
      const user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ errors: ["Email is already taken"] });
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

        res.status(200).json({ user: newUser });
      }
    } catch (error) {
      res.status(500).json({ errors: ["Server error"] });
      console.error(error.message);
    }
  } else {
    res.status(400).json({ errors: ["All fields are required"] });
  }
});

module.exports = router;
