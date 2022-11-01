import mongoose from 'mongoose'
const {Schema, model} = mongoose

const ProductSchema = new Schema({
    title:{
        type: String,
        required: [true, "the title is required"],
    },
    price: {
        type: Number,
        required: [true, "the price is required."],
    },
    description:{
        type: String,
        required: [true, "the description is required"]
    },
    created_at: {
        type: Date,
        default: () => Date.now(),
        immutable:true
    }
});

const Product = model('product', ProductSchema);

export default Product