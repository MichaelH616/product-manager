import './App.css';
import { useState } from 'react';
import ProductForm from './components/ProductForm';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [allProducts, setAllProducts] = useState([])
  return (
    <div>
        <Routes>
          <Route path='/' element={<ProductForm allProducts={allProducts} setAllProducts={setAllProducts}/>} />
        </Routes>
    </div>
  );
}

export default App;
