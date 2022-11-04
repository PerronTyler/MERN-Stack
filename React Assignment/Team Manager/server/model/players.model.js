import mongoose from 'mongoose'
const { Schema, model } = mongoose

const PlayerSchema = new Schema({
    name: {
        type: String,
        required: [true, "the name is required"],
        minLength: [3, "name must be at least 3 characters"]
    },
    position: {
        type: String
    },
    game1: {
        type: String,
        default: 'undecided'
    },
    game2:{
            type: String,
            default: 'undecided'
        },
        game3:{
            type: String,
            default: 'undecided'
        }
})

const Player = model('player', PlayerSchema);

export default Player