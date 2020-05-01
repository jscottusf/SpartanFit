const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: String,
  directions: String,
  createdAt: { type: Date, default: Date.now },
});

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;
