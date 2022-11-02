import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const initialState = {
    title: "",
    price: '',
    description: ""
}

const ProductDetails = () => {
    const [products, setProducts] = useState(initialState)
    let {productId} = useParams()
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/products/${productId}`)
            .then(res => setProducts(res.data[0]))
            .catch(err => console.log(err))
}, [productId])
    return (
        <div>
            <p>Title: {products.title} </p>
            <p>Price: ${products.price} </p>
            <p>Description: {products.description} </p>
        </div>
    )
}

export default ProductDetails