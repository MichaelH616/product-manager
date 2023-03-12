import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {

    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    const deleteProduct = (id) =>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then( res => {
                setProduct(res.data);
            })
            .catch( err => {
                console.log(err);
            })
    },);

    return (
        <div className='text-center mb-5'>
            <h1>{product.title}</h1>
            <h5>Price: ${product.price}</h5>
            <h5>Description: {product.description}</h5>
            <div>
                <Link to={'/'} className="mx-2 btn border btn-primary">Home</Link>
                <button className='btn btn-danger' onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
            </div>
            
        </div>
    )
}

export default ProductDetail;