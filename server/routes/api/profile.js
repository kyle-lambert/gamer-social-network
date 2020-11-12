const express = require("express");
const router = express.Router();

const auth = require("../../middleware/auth");

const {
  createProfile,
  findUserProfile,
} = require("../../controllers/profileController");

// @route    POST api/profile
// @desc     Create a new profile
// @access   Private
router.post("/", auth, createProfile);

// @route    GET api/profile/me
// @desc     Get profile of current user
// @access   Private
router.get("/me", auth, findUserProfile);

module.exports = router;
