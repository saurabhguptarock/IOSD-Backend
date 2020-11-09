const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const Comment = require("./models/comment");

mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (req, res) => {
    console.log("Connected to MongoDB");
  }
);

const app = express();

app.post("/create_comments", (req, res) => {
  try {
    const newComment = new Comment(req.body);
    newComment.save();

    res.send(newComment);
  } catch (error) {
    res.send({ message: error });
  }
});

app.listen(5000, () => console.log("Listening on Port 5000"));
