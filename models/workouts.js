const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
    trim: true,
    required: "Resistance or Cardio",
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for transaction",
  },
  duration: {
    type: Number,
    required: "How many minutes?",
  },
  weight: {
    type: Number,
    required: "How much weight?",
  },
  reps: {
    type: Number,
    required: "How many reps?",
  },
  sets: {
    type: Number,
    required: "How many sets?",
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
