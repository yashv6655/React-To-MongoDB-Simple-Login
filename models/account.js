const mongoose = require("mongoose");

var Account = mongoose.model(
  "Account",
  {
    email: { type: String },
    password: { type: String },
  },
  "accounts"
);

module.exports = { Account };
