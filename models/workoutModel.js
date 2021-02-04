const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    unique: true,
    required: true,
  },

  name: {
    type: String,
    unique: true,
    required: true,
  },

  duration: {
    type: Number,
  },

  weight: {
    type: Number,
    required: true,
  },

  reps: {
    type: Number,
  },

  sets: {
    type: Number,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
