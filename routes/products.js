const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const mongojs = require('mongojs');
const fs = require('fs');

const Product = require('../models/product');

//Add Product
router.post('/addProduct', (req, res) => {
    let newProduct = new Product({
        productDetails: req.body.productDetails,
        productSellPrice: req.body.productSellPrice,
        productBuyPrice: req.body.productBuyPrice,
        inStock: req.body.inStock
    });

    Product.addProduct(newProduct, (err, product) => {
        if(err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'Failed to add new Product'
            });
        } else {
            res.json({
                success: true,
                msg: 'New product added',
                product: product
            });
        }
    });
});

//Get All Products
router.get('/products', (req, res) => {
    Product.getProducts((err, products) => {
        if(err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'Failed to fetch products'+err
            });
        } else {
            res.json({
                success: true,
                msg: 'Fetched all products',
                products: products
            });
        }
    });
});

//Get Product By Product Number
router.get('/product/:id', (req, res, next) => {
    Product.getProductByProductNumber({productNumber: req.params.id}, (err, product) => {
        if(err) {
            res.json({
                success: false,
                msg: 'Failed to fetch Product by Product Number'+productNumber + " with err: "+err
            });
        } else {
            res.json({
                success: true,
                msg: 'Fetched Product by Product Number',
                product: product
            });
        }
    });
});

//Update Product
router.put('/edit/:id', (req, res, next) => {
    Product.findByIdAndUpdate({_id: mongojs.ObjectId(req.params.id)}, req.body, {new: true}, (err, product) => {
        if(err) {
            console.log(err);
            return next(err);
        } else {
            res.json({
                success: true,
                msg: 'Product Updated',
                product: product
            });
        }
    });
});

//Delete Product
router.put('/delete/:id', (req, res, next) => {
    Product.remove({_id: mongojs.ObjectId(req.params.id)}, (err, product) => {
        if(err) {
            console.log(err);
            return next(err);
        } else {
            res.json({
                success: true,
                msg: 'Product Deleted',
                client: client
            });
        }
    });
});

module.exports = router;
