const express = require("express");
const Comment = require("../models/comment");

const router = express.Router();

router.post("/add_comment/:id", async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    await newComment.save();

    res.json(newComment);
  } catch (error) {
    res.status(200).json({ message: error });
  }
});

router.post("/add_comment_thread/:id", async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    await newComment.save();

    res.json(newComment);
  } catch (error) {
    res.status(200).json({ message: error });
  }
});

router.get("/:page_number", async (req, res) => {
  skips = 10 * (req.params.page_number - 1);
  try {
    const comments = await Comment.find().skip(skips).limit(10);
    res.json(comments);
  } catch (error) {
    res.status(200).json({ message: error });
  }
});

router.get("/get_single/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    res.json(comment);
  } catch (error) {
    res.status(200).json({ message: error });
  }
});

module.exports = router;
