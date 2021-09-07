const workout = require('../models/workout')
require('mongoose');
const db = require('../models');


module.exports = function(app) {
    
    app.get('/api/workouts', function(req,res) {
        db.workout.find()
        .then(function(data) {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
          });
    });

    app.post('/api/workouts', function (req,res) {
        db.workout.create({})
        .then(function(data) {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
          });
    });

    app.put('/api/workouts/:id', function ({body, params},res) {
        db.workout.findByIdAndUpdate(params.id, {$push: {exercises: body}})
        .then(function(data) {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
          });
    });

    app.get('/api/workouts/range', function (req,res) {
        db.workout.find()
        .then(function(data) {
            res.json(data)
        })
        .catch(err => {
            res.status(400).json(err);
          });
    });
};

