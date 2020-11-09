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
app.use(express.json());

app.post("/create_comments", async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    await newComment.save();

    res.send(newComment);
  } catch (error) {
    res.status(400).send({ message: error });
  }
});

app.listen(5000, () => console.log("Listening on Port 5000"));
