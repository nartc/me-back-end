const mongoose = require('mongoose');
const config = require('../config/database');

//Vendor Order Schema
const VendorOrderSchema = mongoose.Schema({
    vendorOrderNumber: {
        type: String
    },
    vendorOrderDate: {
        type: Date
    },
    vendorOrderBalance: {
        type: Number
    },
    vendorOrderDetails: [
        {
            products: {
                productNumber: String,
                productName: String,
                productQuantity: Number,
                productPrice: Number,
                totalBalance: Number
            }
        }
    ],
    isReceived: {
        type: Boolean
    },
    isPaid: {
        type: Boolean
    }
});

const VendorOrder = module.exports = mongoose.model('VendorOrder', VendorOrderSchema);

module.exports.getVendorOrderById = (id, callback) => {
    VendorOrder.findById(id, callback);
}

module.exports.getVendorOrderByOrderNumber = (vendorOrderNumber, callback) => {
    const query = {vendorOrderNumber: vendorOrderNumber};
    VendorOrder.findOne(query, callback);
}

module.exports.addVendorOrder = (newVendorOrder, callback) => {
    newVendorOrder.vendorOrderNumber = genOrderNumber();
    newVendorOrder.save(callback);
}

function genOrderNumber() {
    const identifier = "VEN";
    const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const id = '';

    for(let i = 0; i < 9; i++) {
        id += identifier + "-" + possibleChars.charAt(Math.random() * possibleChars.length);
    }

    return id;
}