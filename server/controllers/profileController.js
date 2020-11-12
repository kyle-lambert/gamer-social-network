const Profile = require("../models/profile");

async function createProfile(req, res) {
  const { aboutMe, gamerTag, avatar, location } = req.body.data;

  const profile = {
    userId: currentUserId,
    aboutMe,
    gamerTag,
    avatar,
    location,
  };

  const newProfile = await Profile.findOneAndUpdate(
    { userId: currentUserId },
    { $set: profile },
    { new: true, upsert: true }
  );

  res.status(200).json({ newProfile });
}

async function findUserProfile(req, res) {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "User"
    );

    if (profile) {
      res.status(200).json(profile);
    } else {
      res.status(404).json({ errors: ["Profile does not exist"] });
    }
  } catch (error) {
    res.status(500).json({ errors: ["Server error"] });
  }
}

module.exports = {
  createProfile,
  findUserProfile,
};
