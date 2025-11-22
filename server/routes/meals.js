const express = require("express");
const router = express.Router();
const MealDay = require("../models/MealDay");

/**
 * GET /api/meals/:date
 * Return the meal day (create if not exists)
 */
router.get("/:date", async (req, res) => {
  const { date } = req.params;
  try {
    let plan = await MealDay.findOne({ date });
    if (!plan) {
      plan = await MealDay.create({ date });
    }
    // Ensure arrays exist
    plan = plan.toObject();
    plan.breakfast = Array.isArray(plan.breakfast) ? plan.breakfast : [];
    plan.lunch = Array.isArray(plan.lunch) ? plan.lunch : [];
    plan.dinner = Array.isArray(plan.dinner) ? plan.dinner : [];
    res.json(plan);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not fetch plan" });
  }
});

/**
 * POST /api/meals/:date/add
 * body { section: "breakfast"|"lunch"|"dinner", meal: {..} }
 */
router.post("/:date/add", async (req, res) => {
  const { date } = req.params;
  const { section, meal } = req.body;
  if (!["breakfast", "lunch", "dinner"].includes(section)) {
    return res.status(400).json({ error: "Invalid section" });
  }
  try {
    let plan = await MealDay.findOne({ date });
    if (!plan) {
      plan = new MealDay({ date });
    }
    // Ensure array
    plan[section] = Array.isArray(plan[section]) ? plan[section] : [];
    plan[section].push(meal);
    await plan.save();
    const obj = plan.toObject();
    obj.breakfast = Array.isArray(obj.breakfast) ? obj.breakfast : [];
    obj.lunch = Array.isArray(obj.lunch) ? obj.lunch : [];
    obj.dinner = Array.isArray(obj.dinner) ? obj.dinner : [];
    res.json(obj);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not add meal" });
  }
});

/**
 * POST /api/meals/:date/save
 * Replace entire day's payload:
 * body: { breakfast: [...], lunch: [...], dinner: [...] }
 */
router.post("/:date/save", async (req, res) => {
  const { date } = req.params;
  const payload = req.body || {};
  try {
    const update = {
      breakfast: Array.isArray(payload.breakfast) ? payload.breakfast : [],
      lunch: Array.isArray(payload.lunch) ? payload.lunch : [],
      dinner: Array.isArray(payload.dinner) ? payload.dinner : []
    };
    const plan = await MealDay.findOneAndUpdate({ date }, update, { upsert: true, new: true });
    res.json(plan);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not save plan" });
  }
});

/**
 * DELETE /api/meals/:date/:section/:mealId
 */
router.delete("/:date/:section/:mealId", async (req, res) => {
  const { date, section, mealId } = req.params;
  if (!["breakfast", "lunch", "dinner"].includes(section)) {
    return res.status(400).json({ error: "Invalid section" });
  }
  try {
    const plan = await MealDay.findOne({ date });
    if (!plan) return res.status(404).json({ error: "Plan not found" });
    plan[section] = (plan[section] || []).filter(m => m.id !== mealId);
    await plan.save();
    res.json(plan);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not delete meal" });
  }
});

module.exports = router;
