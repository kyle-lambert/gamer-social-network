const express = require("express");
const router = express.Router();

const auth = require("../../middleware/auth");
const upload = require("../../services/imageUpload");
const { createPost, getAllPosts } = require("../../controllers/postController");

// @route    POST api/posts/create
// @desc     Create a post
// @access   Private
router.post("/create", [auth, upload.single("image")], createPost);

// @route    GET api/posts
// @desc     Get all posts
// @access   Private
router.get("/", auth, getAllPosts);

module.exports = router;
