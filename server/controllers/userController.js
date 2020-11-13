const bcrypt = require("bcrypt");

const User = require("../models/user");

async function registerUser(req, res) {
  const { firstName, lastName, email, password } = req.body.data;

  if (firstName && lastName && email && password) {
    try {
      const user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ errors: ["Email is already taken"] });
      } else {
        const newUser = new User({
          firstName,
          lastName,
          email,
          password,
        });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        newUser.password = hashedPassword;

        await newUser.save();

        res.status(200).json({ user: newUser });
      }
    } catch (error) {
      res.status(500).json({ errors: ["Server error"] });
      console.error(error.message);
    }
  } else {
    res.status(400).json({ errors: ["All fields are required"] });
  }
}

async function updateUser(req, res) {
  const { aboutMe, handle, location } = req.body.data;

  try {
    const user = await User.findById(req.user.id);

    if (user) {
      user.aboutMe = aboutMe;
      user.handle = handle;
      user.location = location;

      const updatedUser = await user.save();

      res.status(200).json(updatedUser);
    } else {
      res.status(400).json({ errors: ["User not found"] });
    }
  } catch (error) {
    res.status(500).json({ errors: ["Server error"] });
  }
}

async function followUser(req, res) {
  try {
    const followerId = req.user.id;
    const followingId = req.params.id;

    const followerUser = await User.findByIdAndUpdate(
      followerId,
      {
        $push: { following: followingId },
      },
      { new: true }
    );

    const followingUser = await User.findByIdAndUpdate(
      followingId,
      {
        $push: { followers: followerId },
      },
      {
        new: true,
      }
    );

    if (followerUser && followingUser) {
      res.status(200).json({
        followerUser,
        followingUser,
      });
    } else {
      res.status(500).json({ errors: ["User not found"] });
    }
  } catch (error) {
    res.status(500).json({ errors: ["Server error"] });
  }
}

async function unfollowUser(req, res) {}

async function getAllUsers(req, res) {
  try {
    const users = await User.find()
      .populate("followers")
      .populate("following")
      .select("-password");

    if (users) {
      res.status(200).json(users);
    } else {
      res.status(404).json({ errors: ["User not found"] });
    }
  } catch (error) {
    res.status(500).json({ errors: ["Server error"] });
  }
}

async function getCurrentUser(req, res) {
  try {
    const user = await User.findById(req.user.id)
      .populate("following")
      .populate("followers")
      .select("-password");

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ errors: ["User not found"] });
    }
  } catch (error) {
    res.status(500).json({ errors: ["Server error"] });
  }
}

async function getUserById(req, res) {
  try {
    const user = await User.findById(req.params.id)
      .populate("following")
      .populate("followers")
      .select("-password");

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ errors: ["User not found"] });
    }
  } catch (error) {
    res.status(500).json({ errors: ["Server error"] });
  }
}

module.exports = {
  getAllUsers,
  getCurrentUser,
  registerUser,
  getUserById,
  updateUser,
  followUser,
  unfollowUser,
};
