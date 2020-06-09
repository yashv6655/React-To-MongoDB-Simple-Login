const mongoose = require("mongoose");

var PostMessage = mongoose.model(
  "PostMessage",
  {
    title: { type: String },
    message: { type: String },
    email: { type: String },
    password: { type: String },
  },
  "testCollection"
);

module.exports = { PostMessage };
