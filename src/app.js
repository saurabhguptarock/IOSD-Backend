const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
let port = process.env.PORT | 5000;

const commentsRoute = require("./routes/comments");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/comments", commentsRoute);

mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (req, res) => {
    console.log("Connected to MongoDB");
  }
);

app.listen(port, () => console.log(`Listening on Port ${port}`));
