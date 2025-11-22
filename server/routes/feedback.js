const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");
const jwt = require("jsonwebtoken");

// auth middleware: expects token in Authorization header
function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id }
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

// get all feedback (most recent first)
router.get("/", auth, async (req, res) => {
  try {
    const list = await Feedback.find().sort({ createdAt: -1 }).lean();
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// post new feedback
router.post("/", auth, async (req, res) => {
  try {
    const { message } = req.body;
    if (!message || !message.trim()) return res.status(400).json({ message: "Message is required" });

    // you may want to fetch username from DB. If you included username in JWT payload, use it.
    const user = { id: req.user.id, username: req.body.username || req.user.username || "User" };

    const fb = await Feedback.create({
      user,
      message
    });

    // broadcast via socket (if socket server attached)
    if (req.app && req.app.get("io")) {
      req.app.get("io").emit("feedback:new", fb);
    }

    res.json(fb);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// post reply to feedback
router.post("/:id/reply", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { message } = req.body;
    if (!message || !message.trim()) return res.status(400).json({ message: "Message is required" });

    // fetch username - if your JWT doesn't include username, you can accept username from request body or query DB
    const replyUser = { id: req.user.id, username: req.body.username || req.user.username || "User" };

    const fb = await Feedback.findById(id);
    if (!fb) return res.status(404).json({ message: "Feedback not found" });

    fb.replies.push({ user: replyUser, message });
    await fb.save();

    if (req.app && req.app.get("io")) {
      req.app.get("io").emit("feedback:reply", { feedbackId: id, reply: fb.replies[fb.replies.length - 1] });
    }

    res.json(fb);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// post rating (1-5) — updates or creates user's rating, recalculates avgRating
router.post("/:id/rate", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { rating } = req.body;
    if (!rating || rating < 1 || rating > 5) return res.status(400).json({ message: "Invalid rating" });

    const fb = await Feedback.findById(id);
    if (!fb) return res.status(404).json({ message: "Feedback not found" });

    // find if user already rated
    const existing = fb.ratings.find(r => r.userId.toString() === req.user.id);
    if (existing) {
      existing.rating = rating;
    } else {
      fb.ratings.push({ userId: req.user.id, rating });
    }

    // recalc avgRating
    const sum = fb.ratings.reduce((s, r) => s + r.rating, 0);
    fb.avgRating = Math.round((sum / fb.ratings.length) * 10) / 10; // one decimal
    await fb.save();

    if (req.app && req.app.get("io")) {
      req.app.get("io").emit("feedback:rating", { feedbackId: id, avgRating: fb.avgRating });
    }

    res.json({ feedbackId: id, avgRating: fb.avgRating });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
