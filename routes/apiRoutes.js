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

  app.get("/api/workouts/range", (req, res) => {
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
    const id = req.params.id;
    const workout = req.body;
    console.log(workout);
    Workout.findByIdAndUpdate(id, { $push: { exercises: workout } }, { new: true })
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => {
        res.send(err);
      });
  });
};
