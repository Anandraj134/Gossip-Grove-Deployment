const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    userProfileUrl: {
      type: String,
      required: true,
    },
    notificationToken: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
