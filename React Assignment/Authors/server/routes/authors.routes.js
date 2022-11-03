import AuthorService from '../services/authors.services.js';
import express from 'express'

const authorsRouter = new express.Router()

authorsRouter.get('/', (req, res) => AuthorService.findAllAuthors(res));
authorsRouter.get('/:id', (req, res) => AuthorService.findOneSingleAuthor(req, res));
authorsRouter.post('/', (req, res) => AuthorService.createNewAuthor(req, res));
authorsRouter.put('/edit/:id', (req, res) => AuthorService.updateExistingAuthor(req, res));
authorsRouter.delete('/delete/:id', (req, res) => AuthorService.deleteAnExistingAuthor(req, res));


export default authorsRouter