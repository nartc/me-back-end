const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');

const Order = require('../models/order');

//Save Order
router.post('/saveOrder', (req, res) => {
    let newOrder = new Order({
        userId: req.body.userId,
        orderNumber: req.body.orderId,
        orderDate: Date.now(),
        orderBalance: req.body.subTotal,
        orderDetails: req.body.cartEntry
    });

    Order.addOrder(newOrder, (err, order) => {
        if(err) {
            console.log('Error:', err);
            res.json({
                success: false,
                msg: 'Failed to add order'
            });
        } else {
            res.json({
                success: true,
                msg: 'New order added',
                order: order
            });
        }
    });
});

//Get All Orders
router.get('/orders', (req, res) => {
    Order.getAllOrders((err, orders) => {
        if(err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'Failed to fetch orders'
            });
        } else {
            res.json({
                success: true,
                msg: 'Fetched All orders',
                orders: orders
            });
        }
    });
 });

 //Get Order by Order Number
 router.get('/order/:id', (req, res, next) => {
    Order.getOrderByOrderNumber(req.params.id, (err, order) => {
        if(err) {
            res.json({
                success: false,
                msg: 'Failed to fetch order by orderNumber'
            });
        } else {
            res.json({
                success: true,
                msg: 'Fetched Order by Order number',
                order: order
            });
        }
    });
 });

 //Get Orders by UserId
 router.get('/orders/:userId', (req, res, next) => {
    Order.getOrderByUserId(req.params.userId, (err, orders) => {
        if(err) {
            res.json({
                success: false,
                msg: 'Failed to fetch orders by UserId'
            });
        } else {
            res.json({
                success: true,
                msg: 'Fetched orders by UserId',
                orders: orders
            });
        }
    });
 });

 //Update Delivery Status
 router.put('/updateDelivery/:id', (req, res, next) => {
    Order.findByIdAndUpdate({_id: mongojs.ObjectId(req.params.id)}, {$set: {isDelivered: req.body.deliveredStatus}}, {new: true}, (err, order) => {
        if(err) {
            console.log(err);
            return next(err);
        } else {
            res.json({
                success: true,
                msg: 'Delivery Status Updated',
                order: order
            });
        }
    });
 });

  //Update Payment Status
  router.put('/updatePayment/:id', (req, res, next) => {
    Order.findByIdAndUpdate({_id: mongojs.ObjectId(req.params.id)}, {$set: {isPaid: req.body.paidStatus}}, {new: true}, (err, order) => {
        if(err) {
            console.log(err);
            return next(err);
        } else {
            res.json({
                success: true,
                msg: 'Paid Status Updated',
                order: order
            });
        }
    });
 });

module.exports = router;