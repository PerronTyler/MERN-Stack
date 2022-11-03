import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'


const initialState = {
    name: "",
}
const initialState2 = {
    name: "",
}
const AuthorsForm = (props) => {
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState(initialState2)
    const [serverErrors, setServerErrors] = useState(initialState2)
    const [isValid, setIsValid] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        if (id) {
            axios.get(`http://127.0.0.1:8000/api/authors/${id}`)
                .then(res => setValues(res.data[0]))
                .catch(err => console.log(err))
        }
    }, [id])
    const handleCancel = () => {
        navigate('/')
    }
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValid && !id) {
            axios.post('http://127.0.0.1:8000/api/authors',
                values
            )
                .then(res => {
                    setServerErrors(initialState2)
                    setValues(initialState)
                    setErrors(initialState2)
                    navigate('/')
                })
                .catch(err => {
                    setServerErrors(err.response.data.errors)
                    console.log(serverErrors)
                })

        }
        else if (isValid && id) {
            axios.put(`http://127.0.0.1:8000/api/authors/edit/${id}`,
                values
            )
                .then(res => {
                    setServerErrors(initialState2)
                    setValues(initialState)
                    setErrors(initialState2)
                    navigate('/')
                })
                .catch(err => setServerErrors(err.response.data.errors))
            console.log(serverErrors);
        }

    }
    const handleValidation = (e) => {
        let isValidSubmission = true
        const fieldName = e.target.name
        const value = e.target.value
        if (fieldName === 'name') {
            if (value.length < 1) {
                setErrors({ ...errors, [fieldName]: "Name is required!" });
                isValidSubmission = false
            } else if (value.length < 3) {
                setErrors({ ...errors, [fieldName]: "Name must be 3 characters or longer!" });
                isValidSubmission = false
            } else {
                setErrors({ ...errors, [fieldName]: "" });
            }
        }
        setIsValid(isValidSubmission)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input name='name' type="text" value={values.name} onChange={handleChange} onBlur={handleValidation} />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                </div>
                <button className='Submit'>Submit Form</button>
            </form>
            <button onClick={() => handleCancel()}>Cancel</button>
        </div>
    )
}

export default AuthorsForm