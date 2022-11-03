import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const initialState = {
    title: "",
    price: '',
    description: ""
}

const ProductDetails = (props) => {
    const [products, setProducts] = useState(initialState)
    const navigate = useNavigate()
    let {productId} = useParams()
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/products/${productId}`)
            .then(res => setProducts(res.data[0]))
            .catch(err => console.log(err))
}, [productId])
const handleDeleteOne = () => {
    props.handleDeleteOne(productId)
    navigate('/')
}
const handleEditOne = () => {
    navigate(`/edit/${productId}`)
}
    return (
        <div>
            <p>Title: {products.title} </p>
            <p>Price: ${products.price} </p>
            <p>Description: {products.description} </p>
            <button onClick={handleDeleteOne}>Delete Product</button>
            <button onClick={handleEditOne}>Edit Product</button>
        </div>
    )
}

export default ProductDetails