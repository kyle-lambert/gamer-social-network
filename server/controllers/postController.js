const Post = require("../models/post");

async function createPost(req, res) {
  const { text } = req.body;

  if (text) {
    const newPost = new Post({
      user: req.user.id,
      text,
    });

    if (req.file) {
      const image = {
        key: req.file.key,
        bucket: req.file.bucket,
        location: req.file.location,
      };

      newPost.image = image;
    }

    try {
      await newPost.save();
      res.status(200).json(newPost);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ errors: ["Server error"] });
    }
  } else {
    res.status(400).json({ errors: ["Post text is required"] });
  }
}

async function getAllPosts(req, res) {
  try {
    const posts = await Post.find().populate("user");

    if (posts) {
      res.status(200).json(posts);
    } else {
      res.status(404).json({ errors: ["No posts found"] });
    }
  } catch (error) {
    res.status(500).json({ errors: ["Server error"] });
  }
}

module.exports = {
  createPost,
  getAllPosts,
};
