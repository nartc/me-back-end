const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');

const Coupon = require('../models/coupon');

//Add Coupon
router.post('/addCoupon', (req, res) => {
    let newCoupon = new Coupon({
        code: req.body.code,
        description: req.body.description,
        discountRate: req.body.discountRate,
        isActive: req.body.isActive
    });

    Coupon.addCoupon(newCoupon, (err, coupon) => {
        if(err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'Failed to add new Coupon'
            });
        } else {
            res.json({
                success: true,
                msg: 'New coupon added',
                coupon: coupon
            });
        }
    });
});

// Get Coupons
router.get('/coupons', (req, res) => {
    Coupon.getAllCoupons((err, coupons) => {
        if(err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'Failed to fetch coupons'+err
            });
        } else {
            res.json({
                success: true,
                msg: 'Fetched all coupons',
                coupons: coupons
            });
        }
    });
});

// Get Coupon By Id
router.get('/coupon/:id', (req, res) => {
    Coupon.getCouponById(req.params.id, (err, coupon) => {
        if(err) {
            console.log('Error: ', err);
            res.json({
                success: false,
                msg: 'Failed to fetch coupon by Id'+err
            });
        } else {
            res.json({
                success: true,
                msg: 'Fetched coupon by Id',
                coupon: coupon
            });
        }
    });
});

//Update Coupon
router.put('/updateCoupon/:id', (req, res, next) => {
    console.log('Body coming in: ', req.body);
    Coupon.findByIdAndUpdate({_id: mongojs.ObjectId(req.params.id)}, req.body, {new: true}, (err, coupon) => {
        if(err) {
            console.log(err);
            return next(err);
        } else {
            res.json({
                success: true,
                msg: 'Coupon Updated',
                coupon: coupon
            });
        }
    });
});

//Delete Coupon
router.delete('/deleteCoupon/:id', (req, res, next) => {
    Coupon.remove({_id: mongojs.ObjectId(req.params.id)}, (err, coupon) => {
        if(err) {
            console.log(err);
            return next(err);
        } else {
            res.json({
                success: true,
                msg: 'Coupon Deleted',
                coupon: coupon
            });
        }
    });
});

module.exports = router;