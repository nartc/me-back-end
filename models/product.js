const mongoose = require('mongoose');
const fs = require('fs');
const multer = require('multer');
const config = require('../config/database');

const ProductSchema = mongoose.Schema({
    productNumber: {
        type: String
    },
    productDetails: {
        name: String,
        description: String,
        unit: String,
        image: {
            data: Buffer,
            contentType: String
        }
    },
    productSellPrice: {
        type: Number
    },
    productBuyPrice: {
        type: Number
    },
    inStock: {
        type: Number
    }
});

const Product = module.exports = mongoose.model('Product', ProductSchema);

module.exports.getProductById = (id, callback) => {
    Product.findById(id, callback);
}

module.exports.getProductByProductNumber = (productNumber, callback) => {
    const query = {productNumber: productNumber};
    Product.findOne(query, callback);
}

module.exports.getProducts = (callback) => {
    Product.find(callback);
}

module.exports.addProduct = (newProduct, callback) => {
    newProduct.productNumber = genProductNumber();

    newProduct.productDetails.name = newProduct.productDetails.name;
    newProduct.productDetails.description = newProduct.productDetails.description;
    newProduct.productDetails.unit = newProduct.productDetails.unit;
    newProduct.productDetails.image.data = fs.readFileSync(newProduct.productDetails.image.path);
    newProduct.productDetails.image.contentType = 'image/*';
    
    newProduct.save(callback);
}

module.exports.deleteProduct = (id, callback) => {
    Product.remove(id, callback);
}

function genProductNumber() {
    const identifier = "PROD";
    const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const id = '';

    for(let i = 0; i < 6; i++) {
        id += identifier + "-" + possibleChars.charAt(Math.random() * possibleChars.length);
    }

    return id;
}