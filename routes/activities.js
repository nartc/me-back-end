const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');

const Activity = require('../models/activity');

//Add Activity
router.post('/addActivity', (req, res) => {
    let newActivity = new Activity({
        revenue: 0,
        expense: 0
    });

    Activity.addActivity(newActivity, (err, activity) => {
        if(err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'Failed to add new activity'
            });
        } else {
            res.json({
                success: true,
                msg: 'New activity added',
                activity: activity
            });
        }
    });
});

//Get Activity
router.get('/getActivity', (req, res) => {
    Activity.getActivities((err, activities) => {
        if(err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'failed to fetch activities'
            });
        } else {
            res.json({
                success: true,
                msg: 'fetched activities',
                activities: activities
            });
        }
    });
});

//Update Revenue
router.put('/updateRevenue/:id', (req, res, next) => {
    console.log(req.body);
    Activity.findByIdAndUpdate({_id: mongojs.ObjectId(req.params.id)}, {$inc:{revenue: req.body.revenue}}, {new: true}, (err, activity) => {
        if(err) {
            console.log(err);
            return next(err);
        } else {
            res.json({
                success: true,
                msg: 'Updated Successfully',
                activity: activity
            });
        }
    });
});

//Update Expense
router.put('/updateExpense/:id', (req, res, next) => {
    console.log(req.body);
    Activity.findByIdAndUpdate({_id: mongojs.ObjectId(req.params.id)}, {$inc:{expense: req.body.expense}}, {new: true}, (err, activity) => {
        if(err) {
            console.log(err);
            return next(err);
        } else {
            res.json({
                success: true,
                msg: 'Updated Successfully',
                activity: activity
            });
        }
    });
});


module.exports = router;