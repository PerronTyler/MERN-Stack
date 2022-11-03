import mongoose from 'mongoose'
const {Schema, model} = mongoose

const AuthorSchema = new Schema({
    name:{
        type: String,
        required: [true, "the name is required"],
        minLength: [3, "name must be at least 3 characters"]
    }
});

const Author = model('author', AuthorSchema);

export default Author