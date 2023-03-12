import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ProductEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id]);

    const changeHandler = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, product)
            .then((res) => {
                console.log(res);
                navigate('/');
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
                            <button className='btn btn-success'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductEdit