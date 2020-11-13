var db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });

  app.put("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });

  app.post("/api/workouts/range", function(req, res) {
    db.Workout.find({}).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });

  app.post("/api/workouts/:id", function(req, res) {
    db.Workouts.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  });
};
