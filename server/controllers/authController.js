const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

async function authenticateUser(req, res) {
  const { email, password } = req.body.data;

  if (email && password) {
    try {
      const user = await User.findOne({ email });

      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
          const JWT_SECRET = process.env.JWT_SECRET;
          const payload = {
            user: {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
            },
          };

          jwt.sign(payload, JWT_SECRET, (error, token) => {
            if (error) {
              res.status(500).json({ errors: ["Unable to generate JWT"] });
            } else {
              res.status(200).json({
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
            errors: ["Invalid credentials"],
          });
        }
      } else {
        res.status(400).json({
          errors: ["Email does not exist. Please create an account first"],
        });
      }
    } catch (error) {
      res.status(500).json({ errors: ["Server error"] });
      console.error(error.message);
    }
  } else {
    res.status(400).json({ errors: ["Fields are required"] });
  }
}

module.exports = {
  authenticateUser,
};
