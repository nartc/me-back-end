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
    vendorOrderDetails: Array,
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
    newVendorOrder.isPaid = false;
    newVendorOrder.isReceived = false;

    newVendorOrder.save(callback);
}

module.exports.getAllOrders = (callback) => {
    VendorOrder.find(callback);
}