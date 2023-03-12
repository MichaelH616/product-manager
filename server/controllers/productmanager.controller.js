const Product = require('../models/productmanager.model');

module.exports = {
    allProducts: (req, res) => {
        Product.find({})
            .then(allProducts => {
                res.json(allProducts)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    findOneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then(oneProduct => {
                res.json(oneProduct)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    createProduct: (req, res) => {
        Product.create(req.body)
            .then(newProduct => {
                res.json(newProduct)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    updateProduct: (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
            .then(updatedProduct => {
                res.json(updatedProduct)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    deleteProduct: (req, res) => {
        Product.findByIdAndDelete(req.params.id)
            .then(result => {
                res.json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}