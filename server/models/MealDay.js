const mongoose = require("mongoose");
const { Schema } = mongoose;

const MealSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, default: "" },
  calories: { type: Number, default: 0 },
  protein: { type: Number, default: 0 },
  carbs: { type: Number, default: 0 },
  fat: { type: Number, default: 0 },
  img: { type: String, default: "" },
  recipe: { type: String, default: "" }
}, { _id: false });

const MealDaySchema = new Schema({
  date: { type: String, required: true, index: true }, // YYYY-MM-DD
  user: { type: String, default: null },
  breakfast: { type: [MealSchema], default: [] },
  lunch: { type: [MealSchema], default: [] },
  dinner: { type: [MealSchema], default: [] }
}, { timestamps: true });

module.exports = mongoose.model("MealDay", MealDaySchema);
