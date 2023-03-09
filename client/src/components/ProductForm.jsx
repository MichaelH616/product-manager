import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductForm = (props) => {
    const navigate = useNavigate;
    const {allProducts, setAllProducts} = props;

    const [product, setProduct] = useState({
        title: '',
        price: 0,
        description:''
    })

    const changeHandler = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', product)
            .then((res) => {
                setAllProducts([...allProducts], res.data)
                setProduct({
                    title:"",
                    price:0,
                    description:""
                })
                navigate('/')
            })
            .catch(err => {
                console.log(err);
            })
    }
  return (
    <div>
        <div className="container text-center">
                <div className="row">
                    <h1 className="text-primary">Product Manager</h1>
                    <form action="" className="form col-4 offset-4" onSubmit={submitHandler}>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Title:</label>
                            <input type="text" name="title" className="form-control" onChange={changeHandler} value={product.title}></input>
                            <br></br>
                            <label htmlFor="" className="form-label">Price:</label>
                            <input type="number" name="price" className="form-control" onChange={changeHandler} value={product.price}></input>
                            <br></br>
                            <label htmlFor="" className="form-label">Description:</label>
                            <input type="text" name="description" className="form-control" onChange={changeHandler} value={product.description}></input>
                            <br></br>
                            <button className='btn btn-success'>Create</button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default ProductForm