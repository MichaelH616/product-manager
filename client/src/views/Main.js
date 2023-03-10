import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {

    const [allProducts, setAllProducts] = useState([])

  return (
    <div>
        <ProductForm allProducts={allProducts} setAllProducts={setAllProducts}/>
        <hr/>
        <ProductList allProducts={allProducts} setAllProducts={setAllProducts}/>
    </div>
  )
}

export default Main