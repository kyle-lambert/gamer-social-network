const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  text: {
    type: String,
    required: true,
  },
  image: {
    key: {
      type: String,
    },
    bucket: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  avatar: {
    type: String,
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
      },
    },
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      text: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: new Date(),
      },
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
