import Joke from '../models/jokes.model.js'

class JokeService{

static findAllJokes = async (res) => {
    try {
        return res.status(200).json(await Joke.find())
    } catch (err) {
        return res.status(500).json(err)
    }
}

static findOneSingleJoke = async (req, res) => {
    try {
        return res.json(await Joke.find({_id: req.params.id}))
    } catch (err) {
        return res.json({ message: "Joke not found", error: err })
    }
}

static createNewJoke = async (req, res) => {
    try{
        return res.status(201).json(await Joke.create(req.body))
    } catch (err) {
        return res.status(422).json({ message: 'Something went wrong', error: err })
    }
}

static updateExistingJoke = async (req, res) => {
    try {
        return res.json(await Joke.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        ))
    } catch (err) {
        return ({ message: 'Something went wrong', error: err })
    }
}

static deleteAnExistingJoke = async (req, res) => {
    try {
        return res.json(await Joke.remove({ _id: req.params.id }))
    } catch (err) {
        return res.json({ message: 'Something went wrong', error: err })
    }
}
}

export default JokeService