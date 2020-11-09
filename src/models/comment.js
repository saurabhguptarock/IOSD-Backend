const mongoose = require("mongoose");

const Comment = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("comment", Comment);
