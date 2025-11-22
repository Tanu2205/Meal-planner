const mongoose = require("mongoose");

const ReplySchema = new mongoose.Schema({
  user: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    username: String
  },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const RatingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  rating: { type: Number, min: 1, max: 5 }
});

const FeedbackSchema = new mongoose.Schema({
  user: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    username: String
  },
  message: { type: String, required: true },
  replies: [ReplySchema],
  ratings: [RatingSchema],
  avgRating: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
