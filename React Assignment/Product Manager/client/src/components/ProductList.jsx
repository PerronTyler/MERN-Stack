import React from 'react'
import {Link} from 'react-router-dom'

const ProductList = (props) => {


const productElements = props.products.map((product, indx) => (<div key={indx}> 
    <h2 ><Link to={`/${product._id}`}>{product.title}</Link></h2>
</div>))

    return (
        <>
        <h1>All Products</h1>
            {productElements}
        </>
    )
}

export default ProductList