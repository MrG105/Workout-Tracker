const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Pull from seeds
// type, name, duration, weight, reps, sets, distance, 

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
            },
            name: {
                type: String,
                trim: true,
            },
            duration: {
                type: Number,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            }
        }
    ],
},
    {
        toJSON: {
            virtuals: true
        }
    }
);

workoutSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const workout = mongoose.model('workout', workoutSchema);

module.exports = workout;
