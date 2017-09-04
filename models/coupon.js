const mongoose = require('mongoose');
const config = require('../config/database');

//Order Schema
const CouponSchema = mongoose.Schema({
    code: {
        type: String
    },
    description: {
        type: String
    },
    discountRate: {
        type: Number
    },
    isActive: {
        type: Boolean
    }
});

const Coupon = module.exports = mongoose.model('Coupon', CouponSchema);

module.exports.getAllCoupons = (callback) => {
    Coupon.find(callback);
}

module.exports.getCouponById = (id, callback) => {
    Coupon.findById(id, callback);
}

module.exports.addCoupon = (newCoupon, callback) => {
    newCoupon.save(callback);
}

module.exports.deleteCoupon = (id, callback) => {
    Coupon.remove(id, callback);
}