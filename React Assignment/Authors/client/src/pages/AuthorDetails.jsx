import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const initialState = {
    name: "",
}

const AuthorDetails = (props) => {
    const [authors, setAuthors] = useState(initialState)
    const navigate = useNavigate()
    let {id} = useParams()
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/authors/${id}`)
            .then(res => setAuthors(res.data[0]))
            .catch(err => console.log(err))
}, [id])
const handleCancel = () => {
    navigate('/')
}
const handleEditOne = () => {
    navigate(`/edit/${id}`)
}
    return (
        <div>
            <p>Name: {authors.name} </p>
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleEditOne}>Edit Author</button>
        </div>
    )
}

export default AuthorDetails