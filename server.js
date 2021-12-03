const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PostSchema = require("./models/posts");

// only use .env variables if not running on production
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const port = 3001;

app.use(express.json());

const user = process.env.USER;
const password = process.env.PASSWORD;
const db_uri = process.env.DB_URI;

mongoose.connect(`mongodb+srv://${user}:${password}@${db_uri}`);

const db = mongoose.connection;

db.once("open", () => {
  console.log("CONNECTED SUCCESSFULLY");
});

app.get("/posts", async (req, res) => {
  const result = await PostSchema.find({});
  res.send(result);
});

app.get("/posts/:postID", async (req, res) => {
  const result = await PostSchema.find({ handle: req.params.postID });
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`);
});
