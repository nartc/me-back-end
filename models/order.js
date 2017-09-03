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
    orderDetails: Array,
    isDelivered: {
        type: Boolean
    },
    isPaid: {
        type: Boolean
    }
});

const Order = module.exports = mongoose.model('Order', OrderSchema);

module.exports.getOrderById = (id, calback) => {
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
    newOrder.isDelivered = false;
    newOrder.isPaid = false;

    newOrder.save(callback);
}

module.exports.getAllOrders = (callback) => {
    Order.find(callback);
}