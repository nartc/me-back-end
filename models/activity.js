const mongoose = require('mongoose');
const config = require('../config/database');

const ActivitySchema = mongoose.Schema({
    revenue: {
        type: Number
    },
    expense: {
        type: Number
    }
});

const Activity = module.exports = mongoose.model('Activity', ActivitySchema);

module.exports.addActivity = (newActivity, callback) => {
    newActivity.revenue = 0;
    newActivity.expense = 0;

    newActivity.save(callback);
}

module.exports.getActivities = (callback) => {
    Activity.find(callback);
}