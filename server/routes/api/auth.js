const express = require("express");
const router = express.Router();

// @route    POST api/auth
// @desc     Authenticate user and get token
// @access   Public
router.post("/", (req, res) => {
  res.json({
    message: "authenticate user and get token",
  });
});

module.exports = router;
