import PlayerService from '../services/players.services.js';
import express from 'express'

const playersRouter = new express.Router()

playersRouter.get('/', (req, res) => PlayerService.findAllPlayers(res));
playersRouter.get('/:id', (req, res) => PlayerService.findOneSinglePlayer(req, res));
playersRouter.post('/', (req, res) => PlayerService.createNewPlayer(req, res));
playersRouter.put('/edit/:id', (req, res) => PlayerService.updateExistingPlayer(req, res));
playersRouter.delete('/delete/:id', (req, res) => PlayerService.deleteAnExistingPlayer(req, res));


export default playersRouter