const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  aboutMe: {
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
});

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
