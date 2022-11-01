import mongoose from 'mongoose'
const {Schema, model} = mongoose

const JokeSchema = new Schema({
    setup:{
        type: String,
        required: [true, "the setup is required"],
        minLength: [8, 'the setup should be a minimum of 8 characters.']
    },
    punchline: {
        type: String,
        required: [true, "the punchline is required."],
        minLength: [5, "the punchline should be minimum of 5 charecters."]
    },
    created_at: {
        type: Date,
        default: () => Date.now(),
        immutable:true
    }
});

const Joke = model('joke', JokeSchema);

export default Joke