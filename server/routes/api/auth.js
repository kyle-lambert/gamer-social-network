const express = require("express");
const router = express.Router();

const { authenticateUser } = require("../../controllers/authController");

// @route    POST api/auth
// @desc     Authenticate user and get token
// @access   Public

router.post("/", authenticateUser);

module.exports = router;
