import ProductService from '../services/products.services.js'
import express from 'express'

const productsRouter = new express.Router()

productsRouter.get('/', (req, res) => ProductService.findAllProducts(res));
productsRouter.get('/:_id', (req, res) => ProductService.findOneSingleProduct(req, res));
productsRouter.post('/', (req, res) => ProductService.createNewProduct(req, res));
productsRouter.put('/edit/:id', (req, res) => ProductService.updateExistingProduct(req, res));
productsRouter.delete('/delete/:id', (req, res) => ProductService.deleteAnExistingProduct(req, res));


export default productsRouter