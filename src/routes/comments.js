const express = require("express");
const Comment = require("../models/comment");

const router = express.Router();

router.post("/add_comment", async (req, res) => {
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
    const comments = await Comment.find({ thread: "" }).skip(skips).limit(10);
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

// !IT can also be converted to its own collection. To save time I did this

router.get("/threads/:id/:page_number", async (req, res) => {
  skips = 10 * (req.params.page_number - 1);
  try {
    const comment = await Comment.find({ thread: req.params.id })
      .skip(skips)
      .limit(10);
    res.json(comment);
  } catch (error) {
    res.status(200).json({ message: error });
  }
});

router.post("/threads", async (req, res) => {
  try {
    const comment = await Comment(req.body);
    await comment.save();

    res.json(comment);
  } catch (error) {
    res.status(200).json({ message: error });
  }
});

module.exports = router;
