const mongoose = require('mongoose');
const config = require('../config/database');

//Order Schema
const OrderSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    orderNumber: {
        type: String
    },
    orderDate: {
        type: Date
    },
    orderBalance: {
        type: Number
    },
    orderDetails: [
        {
            products: {
                productNumber: String,
                productName: String,
                productPrice: Number,
                productQuantity: Number,
                totalBalance: Number
            }
        }
    ],
    isDelivered: {
        type: Boolean
    },
    isPaid: {
        type: Boolean
    }
});

const Order = modules.exports = mongoose.model('Order', OrderSchema);

modules.exports.getOrderById = (id, calback) => {
    Order.findById(id, callback);
}

module.exports.getOrderByOrderNumber = (orderNumber, callback) => {
    const query = {orderNumber: orderNumber};
    Order.findOne(query, callback);
}

module.exports.getOrderByUserId = (userId, callback) => {
    const query = {userId: userId};
    Order.find(query, callback);
}

module.exports.addOrder = (newOrder, callback) => {
    newOrder.orderNumber = genOrderNumber();
    newOrder.save(callback);
}

module.exports.getAllOrders = (callback) => {
    Order.find(callback);
}

function genOrderNumber() {
    const identifier = "MEC";
    const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const id = '';

    for(let i = 0; i < 9; i++) {
        id += identifier + "-" + possibleChars.charAt(Math.random() * possibleChars.length);
    }

    return id;
}