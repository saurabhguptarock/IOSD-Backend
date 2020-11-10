const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const commentsRoute = require("./routes/comments");

mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (req, res) => {
    console.log("Connected to MongoDB");
  }
);

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/comments", commentsRoute);

app.listen(5000, () => console.log("Listening on Port 5000"));
