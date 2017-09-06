const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');

const VendorOrder = require('../models/vendorOrder');

//Save Order
router.post('/saveOrder', (req, res) => {
    let newVendorOrder = new VendorOrder({
        vendorOrderNumber: req.body.vendorOrderId,
        vendorOrderDate: Date.now(),
        vendorOrderBalance: req.body.subTotal,
        vendorOrderDetails: req.body.cartEntry
    });

    VendorOrder.addVendorOrder(newVendorOrder, (err, vendorOrder) => {
        if(err) {
            console.log('Error:', err);
            res.json({
                success: false,
                msg: 'Failed to add vendor order'
            });
        } else {
            res.json({
                success: true,
                msg: 'New vendor order added',
                vendorOrder: vendorOrder
            });
        }
    });
});

//Get All Orders
router.get('/orders', (req, res) => {
    VendorOrder.getAllOrders((err, vendorOrders) => {
        if(err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'Failed to fetch vendor orders'
            });
        } else {
            res.json({
                success: true,
                msg: 'Fetched All vendor orders',
                vendorOrders: vendorOrders
            });
        }
    });
 });

  //Get Vendor Order by Order Number
  router.get('/order/:id', (req, res, next) => {
    VendorOrder.getVendorOrderByOrderNumber(req.params.id, (err, vendorOrder) => {
        if(err) {
            res.json({
                success: false,
                msg: 'Failed to fetch vendorOrder by vendorOrderNumber'
            });
        } else {
            res.json({
                success: true,
                msg: 'Fetched vendorOrder by vendorOrder number',
                vendorOrder: vendorOrder
            });
        }
    });
 });

 //Update Receive Status
 router.put('/updateReceipt/:id', (req, res, next) => {
    VendorOrder.findByIdAndUpdate({_id: mongojs.ObjectId(req.params.id)}, {$set: {isReceived: req.body.receivedStatus}}, {new: true}, (err, vendorOrder) => {
        if(err) {
            console.log(err);
            return next(err);
        } else {
            res.json({
                success: true,
                msg: 'Receive Status Updated',
                vendorOrder: vendorOrder
            });
        }
    });
 });

 module.exports = router;