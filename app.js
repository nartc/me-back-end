const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const config = require('./config/database');
const fs = require('fs');
const multer = require('multer');

mongoose.Promise = global.Promise;
mongoose.connect(config.database, {
    useMongoClient: true
});

//On Connection
mongoose.connection.on('connected', () => {
    console.log('connected to database at '+config.database);
});

//On Connection Error
mongoose.connection.on('error', (err) => {
    console.log('Database error: '+err);
});

//Set Up Routes Path
const app = express();

const admins = require('./routes/admins');
const clients = require('./routes/clients');
const orders = require('./routes/orders');
const products = require('./routes/products');
const vendorOrders = require('./routes/vendor-orders');
const coupons = require('./routes/coupons');
const activities = require('./routes/activities');


//Port Number
const port = process.env.PORT || 8080;

//CORS Middleware
app.use(cors());

//Set Static 'Build' Folder
app.use(express.static(path.join(__dirname, 'build')));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
    limit: "10mb",
    parameterLimit: 10000
}));

//Multer Middleware
app.use(multer({ dest: './uploads/', rename: function(fieldName, fileName) { return fileName;}}).any());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//Routes
app.use('/admins', admins);
app.use('/clients', clients);
app.use('/orders', orders);
app.use('/vendor-orders', vendorOrders);
app.use('/products', products);
app.use('/coupons', coupons);
app.use('/activities', activities)

//Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

//All Routes
app.all('/*', (req, res, next) => {
    res.sendFile('build/index.html', {root: __dirname});
});

//Start Server
app.listen(port, () => {
    console.log('Server started on port: '+port);
});