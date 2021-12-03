const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    title: String, // String is shorthand for {type: String}
    body: String,
    handle: String,
    excerpt: String,
    content: String,
    date: { type: Date, default: Date.now },
  },
  { collection: "posts" }
);

module.exports = mongoose.model("Posts", PostSchema);
