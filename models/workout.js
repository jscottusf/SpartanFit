const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  title: { type: String, required: true },
  workoutBody: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
