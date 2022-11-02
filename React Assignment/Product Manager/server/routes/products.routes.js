import ProductService from '../services/products.services.js'
import express from 'express'

const productsRouter = new express.Router()

productsRouter.get('/', (req, res) => ProductService.findAllProducts(res));
productsRouter.get('/:productId', (req, res) => ProductService.findOneSingleProduct(req, res));
productsRouter.post('/', (req, res) => ProductService.createNewProduct(req, res));
productsRouter.put('/edit/:productId', (req, res) => ProductService.updateExistingProduct(req, res));
productsRouter.delete('/delete/:productId', (req, res) => ProductService.deleteAnExistingProduct(req, res));


export default productsRouter