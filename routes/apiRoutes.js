const db = require("./../models");
const { update } = require("./../models/workouts.js");
const { Workout } = require("./../models");

module.exports = function(app) {
  app.post("/api/workouts", async (req, res) => {
    const response = await db.Workout.create({ type: "workout" })
    res.json(response);
});

app.put("/api/workouts/:id", (req, res) => {
    const id = req.params.id;
    console.log(req.body);
    db.Workout.findByIdAndUpdate({ _id: id }, { $push: { exercises: req.body } }, { new: true })
        .then(event => {
            res.json(event);
        })
        .catch(err => {
            res.json(err);
        });
})

app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(event => {
            res.json(event);
        })
        .catch(err => {
            res.json(err);
        });
});

app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(event => {
            res.json(event);
        })
        .catch(err => {
            res.json(err);
        });
});

  
};
