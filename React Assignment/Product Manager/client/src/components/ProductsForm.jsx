import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'


const initialState = {
    title: "",
    price: '',
    description: ""
}
const initialState2 = {
    title: "",
    price: '',
    description: ""
}
const ProductsForm = (props) => {
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState(initialState2)
    const [serverErrors, setServerErrors] = useState(initialState2)
    const [isValid, setIsValid] = useState(false)
    const {productId} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        if (productId) {
            axios.get(`http://127.0.0.1:8000/api/products/${productId}`)
                .then(res => setValues(res.data[0]))
                .catch(err => console.log(err))
        }
}, [productId])


    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValid && !productId){
            axios.post('http://127.0.0.1:8000/api/products', 
                values
            )
                .then(res=>console.log(res))
                .catch(err=>setServerErrors(err.response.data.errors))
            props.handleSubmit(values)
            console.log(serverErrors);
            setServerErrors(initialState2)
            setValues(initialState)
            setErrors(initialState2)
        }
        else if(isValid && productId){
            axios.put(`http://127.0.0.1:8000/api/products/edit/${productId}`, 
                values
            )
                .then(res=>{
                    setServerErrors(initialState2)
                    setValues(initialState)
                    setErrors(initialState2)
                    props.getProducts()
                    navigate('/')
                })
                .catch(err=>setServerErrors(err.response.data.errors))
            console.log(serverErrors);
        }

    }
    const handleValidation = (e) => {
        let isValidSubmission = true
        const fieldName = e.target.name
        const value = e.target.value
        if (fieldName === 'title'){
            if(value.length < 1) {
                setErrors({...errors, [fieldName]:"Title is required!"});
                isValidSubmission = false
            } else if(value.length < 3) {
                setErrors({...errors, [fieldName]:"Title must be 3 characters or longer!"});
                isValidSubmission = false
            } else {
                setErrors({...errors, [fieldName]:""});
            }
        }
        if (fieldName === 'price'){
            console.log(fieldName);
            console.log(typeof value);
            if(value === '0') {
                setErrors({...errors, [fieldName]:"Things aren't Free!"});
                isValidSubmission = false
            } else if (value.length < 1) {
                setErrors({...errors, [fieldName]:"price is required!"})
                isValidSubmission = false
            } else {
                setErrors({...errors, [fieldName]:""});
            }
        }
        if (fieldName === 'description'){
            if(value.length < 1) {
                setErrors({...errors, [fieldName]:"description is required!"});
                isValidSubmission = false
            } else if(value.length < 3) {
                setErrors({...errors, [fieldName]:"description must be 3 characters or longer!"});
                isValidSubmission = false
            } else {
                setErrors({...errors, [fieldName]:""});
            }
        }
        setIsValid(isValidSubmission)
    }
return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                    <label htmlFor='title'>Title: </label>
                    <input name='title' type="text" value={values.title}  onChange={handleChange} onBlur={handleValidation} />
                    {errors.title && <p style={{color:'red'}}>{ errors.title }</p>}
            </div>
            <div>
                    <label htmlFor='price'>Price: </label>
                    <input name='price' type="number" value={values.price} onChange={handleChange} onBlur={handleValidation} />
                    {errors.price && <p style={{color:'red'}}>{ errors.price }</p>}
            </div>
            <div>
                    <label htmlFor='description'>Description: </label>
                    <input name='description' type="text" value={values.description}  onChange={handleChange} onBlur={handleValidation} />
                    {errors.description && <p style={{color:'red'}}>{ errors.description }</p>}
            </div>
            <button className='Submit'>Submit Form</button>
        </form>
    </div>
)
}

export default ProductsForm