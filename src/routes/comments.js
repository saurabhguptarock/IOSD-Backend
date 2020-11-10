const express = require("express");
const Comment = require("../models/comment");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    await newComment.save();

    res.json(newComment);
  } catch (error) {
    res.status(200).json({ message: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find().limit(10);
    res.json(comments);
  } catch (error) {
    res.status(200).json({ message: error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    res.json(comment);
  } catch (error) {
    res.status(200).json({ message: error });
  }
});

module.exports = router;
