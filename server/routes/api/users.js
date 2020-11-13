const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const {
  getAllUsers,
  registerUser,
  updateUser,
  getCurrentUser,
  getUserById,
  followUser,
  unfollowUser,
} = require("../../controllers/userController");

// @route    GET api/users
// @desc     Get all users
// @access   Private
router.get("/", auth, getAllUsers);

// @route    POST api/users/register
// @desc     Register new user
// @access   Public
router.post("/register", registerUser);

// @route    PUT api/users/update
// @desc     Update existing user
// @access   Private
router.put("/update", auth, updateUser);

// @route    GET api/users/me
// @desc     Get current user
// @access   Private
router.get("/me", auth, getCurrentUser);

// @route    GET api/users/:id
// @desc     Get user by id
// @access   Private
router.get("/:id", auth, getUserById);

// @route    PUR api/users/follow/:id
// @desc     Follow user
// @access   Private
router.put("/follow/:id", auth, followUser);

// @route    PUT api/users/unfollow/:id
// @desc     Unfollow user
// @access   Private
router.put("/unfollow/:id", auth, unfollowUser);

module.exports = router;
