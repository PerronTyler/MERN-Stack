import AuthorList from '../components/AuthorList';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Main = () => {
    const [authors, setAuthors] = useState([])
    const getAuthors = () => {
        axios.get('http://127.0.0.1:8000/api/authors')
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getAuthors()
    }, [])
    const handleSubmit = (author) => {
        setAuthors([...authors, author])
    }
    const handleDeleteOne = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/authors/delete/${id}`)
            .then(res => setAuthors(authors.filter(author => author._id !== id)))
            .catch(err => console.log(err))
    }
    return (
        <>
            <AuthorList handleDeleteOne={handleDeleteOne} authors={authors} />
        </>
    );
}

export default Main;