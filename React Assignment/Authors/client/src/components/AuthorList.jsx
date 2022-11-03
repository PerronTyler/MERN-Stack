import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const AuthorList = (props) => {
    const navigate = useNavigate()
    const handleEditOne = (id) => {
        navigate(`/edit/${id}`)
    }

const authorElements = props.authors.map((author, indx) => (<div key={indx}> 
    <h2 ><Link to={`/${author._id}`}>{author.name}</Link> 
    <button onClick={() => props.handleDeleteOne(author._id)}>Delete Author</button> 
    <button onClick={() => handleEditOne(author._id)}>Edit Author</button></h2>
</div>))

    return (
        <>
        <h1>All Authors</h1>
            {authorElements}
        </>
    )
}

export default AuthorList