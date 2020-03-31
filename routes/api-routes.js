const Workout = require("../models/workout");


module.exports = function (app) {
    // Getting workouts
    app.get("/api/workouts", function (req, res) {
        // getting it out of Workout.js in models.
        Workout.find({}).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    })
    // Getting the range from workouts to display
    app.get("/api/workouts/range", (req, res) => {
        Workout.find({}).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    })
    // Isolating a single workout by id
    app.get("/api/workouts/:id", function (req, res) {
        var id = req.params.id;
        Workout.findById(id, function (err, dbWorkout) {
            if (err) {
                console.error(err)
            }
            res.json(dbWorkout);
        })
    })
    //Creating a new workout and putting it in the DB
    app.post("/api/workouts/", function (req, res) {
        Workout.create({ exercise: req.body }).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    })

    // Isolating by an ID in workouts and updating the info
    app.put("/api/workouts/:id", function (req, res) {
        var query = { _id: req.params.id };
        Workout.findOneAndUpdate(query, {
            $push: { exercises: [req.body] }
        }, function (err, dbWorkout) {
            if (err) {
                res.json(err);
            } else {
                res.json(dbWorkout);
            }
        })
    })

}