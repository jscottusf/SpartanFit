const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: String,
  data: [
    {
      type: Schema.Types.ObjectId,
      ref: "Data",
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
