const express = require("express");
const router = express.Router();

const auth = require("../../middleware/auth");

// @route    POST api/profiles/me
// @desc     Get profile of current user
// @access   Private

router.get("/me", auth, async (req, res) => {
  if (req.userId) {
  } else {
    res.status(500).json({ errors: ["Server error"] });
  }
});

module.exports = router;
