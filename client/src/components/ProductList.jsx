import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const { allProducts, setAllProducts } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                setAllProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    },);

    return (
        <div className='text-center'>
            <h1>All Products:</h1>
            {
                allProducts.map((product) => {
                    return (
                        <div className="h3 mb-4" key={product._id}>
                            <Link className="link-dark" to={`/products/${product._id}`}>{product.title}</Link>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default ProductList