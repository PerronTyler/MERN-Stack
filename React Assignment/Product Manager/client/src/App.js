import './App.css';
import ProductsForm from './components/ProductsForm';
import ProductList from './components/ProductList';
import { Routes, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MainHeader from './components/MainHeader';
import ProductDetails from './pages/ProductDetails';

function App() {
  const [products, setProducts] = useState([])
  const getProducts = () => {
    axios.get('http://127.0.0.1:8000/api/products')
                .then(res => setProducts(res.data))
                .catch(err => console.log(err))
  }
    useEffect(() => {
            getProducts()
    }, [])
  const handleSubmit = (product) => {
    setProducts([...products, product])
  }
  const handleDeleteOne = (productId) => {
    axios.delete(`http://127.0.0.1:8000/api/products/delete/${productId}`)
    .then(res => setProducts(products.filter(product => product._id != productId)))
    .catch(err => console.log(err))
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={[ <MainHeader key={1} />, <ProductsForm key={2} handleSubmit = {handleSubmit}/>, <ProductList key={3} handleDeleteOne = {handleDeleteOne} products= {products}/> ]} />
        <Route path='/:productId' element={[<MainHeader/>, <ProductDetails handleDeleteOne = { handleDeleteOne }/>]} />
        <Route path='/edit/:productId' element={[<MainHeader/>, <ProductsForm getProducts= {getProducts} />]} />
        
      </Routes>
    </div>
  );
}

export default App;
