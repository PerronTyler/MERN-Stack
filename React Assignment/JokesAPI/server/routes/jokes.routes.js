import JokeService from '../services/jokes.service.js'
import express from 'express'

const jokesRouter = new express.Router()

jokesRouter.get('/', (req, res) => JokeService.findAllJokes(res));
jokesRouter.get('/:_id', (req, res) => JokeService.findOneSingleJoke(req, res));
jokesRouter.post('/', (req, res) => JokeService.createNewJoke(req, res));
jokesRouter.put('/edit/:id', (req, res) => JokeService.updateExistingJoke(req, res));
jokesRouter.delete('/delete/:id', (req, res) => JokeService.deleteAnExistingJoke(req, res));


export default jokesRouter
