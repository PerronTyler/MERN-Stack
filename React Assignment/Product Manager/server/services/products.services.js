import Product from '../models/products.model.js'

class ProductService{

static findAllProducts = async (res) => {
    try {
        return res.status(200).json(await Product.find())
    } catch (err) {
        return res.status(500).json(err)
    }
}

static findOneSingleProduct = async (req, res) => {
    try {
        return res.json(await Product.find({_id: req.params.id}))
    } catch (err) {
        return res.json({ message: "Product not found", error: err })
    }
}

static createNewProduct = async (req, res) => {
    try{
        return res.status(201).json(await Product.create(req.body))
    } catch (err) { console.log('it certainly reached the error');
        return res.status(422).json({ message: 'Something went wrong', error: err })
    }
}

static updateExistingProduct = async (req, res) => {
    try {
        return res.json(await Product.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        ))
    } catch (err) {
        return ({ message: 'Something went wrong', error: err })
    }
}

static deleteAnExistingProduct = async (req, res) => {
    try {
        return res.json(await Product.remove({ _id: req.params.id }))
    } catch (err) {
        return res.json({ message: 'Something went wrong', error: err })
    }
}
}

export default ProductService