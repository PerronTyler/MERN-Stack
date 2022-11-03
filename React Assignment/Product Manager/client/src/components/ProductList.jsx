import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const ProductList = (props) => {
    const navigate = useNavigate()
    const handleEditOne = (productId) => {
        navigate(`/edit/${productId}`)
    }

const productElements = props.products.map((product, indx) => (<div key={indx}> 
    <h2 ><Link to={`/${product._id}`}>{product.title}</Link> 
    <button onClick={() => props.handleDeleteOne(product._id)}>Delete Product</button> 
    <button onClick={() => handleEditOne(product._id)}>Edit Product</button></h2>
</div>))

    return (
        <>
        <h1>All Products</h1>
            {productElements}
        </>
    )
}

export default ProductList