import Author from "../model/authors.model.js"

class AuthorService{

static findAllAuthors = async (res) => {
    try {
        return res.status(200).json(await Author.find())
    } catch (err) {
        return res.status(500).json(err)
    }
}

static findOneSingleAuthor = async (req, res) => {
    
    try {
        return res.json(await Author.find({_id: req.params.id}))
    } catch (err) {
        return res.json({ message: "Author not found", error: err })
    }
}

static createNewAuthor = async (req, res) => {
    try{
        return res.status(201).json(await Author.create(req.body))
    } catch (err) {
        return res.status(422).json({ message: 'Something went wrong', error: err })
    }
}

static updateExistingAuthor = async (req, res) => {
    try {
        return res.json(await Author.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        ))
    } catch (err) {
        return res.status(422).json({ message: 'Something went wrong', error: err })
    }
}

static deleteAnExistingAuthor = async (req, res) => {
    try {
        return res.json(await Author.deleteOne({ _id: req.params.id }))
    } catch (err) {
        return res.json({ message: 'Something went wrong', error: err })
    }
}
}

export default AuthorService