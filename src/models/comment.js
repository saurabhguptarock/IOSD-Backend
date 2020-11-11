const mongoose = require("mongoose");

const Comment = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  sentBy: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  likes: { type: Number, default: 0 },

  replies: { type: Number, default: 0 },
  thread: { type: String, default: "" },
});

module.exports = mongoose.model("comments", Comment);
