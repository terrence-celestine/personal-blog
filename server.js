const express = require("express");
const app = express();
const mongoose = require("mongoose");

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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`);
});
