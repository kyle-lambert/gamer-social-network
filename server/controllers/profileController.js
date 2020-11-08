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

module.exports = {
  createProfile,
};
