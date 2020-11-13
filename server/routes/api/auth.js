const express = require("express");
const router = express.Router();

const { authenticateUser } = require("../../controllers/authController");

// @route    POST api/auth/login
// @desc     Authenticate user and get token
// @access   Public
router.post("/login", authenticateUser);

module.exports = router;
