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

    useEffect(() => {
            axios.get('http://127.0.0.1:8000/api/products')
                .then(res => setProducts(res.data))
                .catch(err => console.log(err))
    }, [])
  const handleSubmit = (product) => {
    setProducts([...products, product])
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={[<ProductsForm handleSubmit = {handleSubmit}/>, <ProductList products= {products}/> ]} />
        <Route path='/:productId' element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
