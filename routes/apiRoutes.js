const { Workout } = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", function (req, res) {
    Workout.create({})
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    console.log("This is the params", req.params, req.body);
    let exercise = req.body;
    const workout = {
      type: exercise.type,
      name: exercise.name,
      distance: exercise.distance,
      duration: exercise.duration,
    };
    console.log(workout);
    Workout.findByIdAndUpdate({ $push: { exercises: workout } }, { new: true })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.send(err);
      });
  });
};
