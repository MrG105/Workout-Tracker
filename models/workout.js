const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// Pull from seeds
// type, name, duration, weight, reps, sets, distance, 
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: [
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
    totalDuration: {
        type: Number,
    }
});

const workout = mongoose.model('workout', workoutSchema);

module.exports = workout;
