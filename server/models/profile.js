const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  aboutMe: {
    type: String,
  },
  gamerTag: {
    type: String,
  },
  avatar: {
    type: String,
  },
  location: {
    city: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

const Profile = mongoose.model("profile", profileSchema);
module.exports = Profile;
