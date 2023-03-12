import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const { allProducts, setAllProducts } = props;

    const removeFromDOM = id => {
        setAllProducts(allProducts.filter(product => product._id !== id));
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                setAllProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, );

    const deleteProduct = (id) =>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                removeFromDOM(id);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='text-center'>
            <h1>All Products:</h1>
            {
                allProducts.map((product) => {
                    return (
                        <div className="h3 mb-4" key={product._id}>
                            <Link className="link-dark" to={`/products/${product._id}`}>{product.title}</Link>
                            <Link className="mx-3 btn border" to={`/products/edit/${product._id}`}>Edit</Link>
                            <button className='btn btn-danger' onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default ProductList