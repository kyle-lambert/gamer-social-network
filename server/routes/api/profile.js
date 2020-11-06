const express = require("express");
const router = express.Router();

const Profile = require("../../models/profile");
const auth = require("../../middleware/auth");

const { createProfile } = require("../../controllers/profileController");

// @route    POST api/profile
// @desc     Create a new profile
// @access   Private
router.post("/", auth, createProfile);

// @route    GET api/profile/me
// @desc     Get profile of current user
// @access   Private
router.get("/me", auth, async (req, res) => {
  if (req.userId) {
    // try {
    //   console.log(req.userId);
    //   const userProfile = await Profile.findById()
    //   console.log(userProfile);
    // } catch (error) {}
  } else {
    res.status(500).json({ errors: ["Server error"] });
  }
});

module.exports = router;
