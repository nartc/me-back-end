const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Client = require('../models/client');
const config = require('../config/database');

//Add Client
router.post('/addClient', (req, res) => {
    let newClient = new Client({
        firstName: req.body.firstName,
        lastName: req.body.lastNamem,
        email: req.body.email,
        password: req.body.password,
        contact: req.body.contact,
        balance: req.body.balance
    });

    Client.addClient(newClient, (err, client) => {
        if(err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'Failed to add new client'
            });
        } else {
            res.json({
                success: true,
                msg: 'New client added',
                client: client
            });
        }
    });
});

//Authenticate Client
router.post('/authenticateClient', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const role="Client"

    Client.getClientByEmail(email, role, (err, client) => {
        if(err) {
            console.log(err);
        }
        if(!client) {
            return res.json({
                success: false,
                msg: 'Client not found'
            });
        }

        Client.comparePassword(password, client.password, (err, isMatched) => {
            if(err) {
                console.log(err);
            }
            if(isMatched) {
                const token = jwt.sign(client, config.secret, {
                    expiresIn: 18000 //30 Minutes
                });

                res.json({
                    success: true,
                    token: 'JWT '+token,
                    msg: 'Logged In',
                    client: {
                        _id: client._id,
                        email: client.email,
                        role: client.role,
                        firstName: client.firstName
                    }
                });
            } else {
                return res.json({
                    success: false,
                    msg: 'Wrong Password'
                });
            }
        });
    });
});

router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json({
        client: req.user
    });
});

//Change Password
router.put('/password', (req, res, next) => {
    console.log(req.body);
    let candidatePassword = req.body.candidatePassword;
    let newPassword = req.body.newPassword;
    let currentPassword = req.body.client.password;

    Client.comparePassword(candidatePassword, currentPassword, (err, isMatched) => {
        if(err) {
            console.log(err);
        } 
        if(isMatched) {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newPassword, salt, (err, hash) => {
                    newPassword = hash;
                    req.body.client = {
                        _id: req.body.client._id,
                        firstName: req.body.client.firstName,
                        lastName: req.body.client.lastName,
                        email: req.body.client.email,
                        contact: req.body.client.contact,
                        password: newPassword
                    }

                    Client.findByIdAndUpdate({_id: mongojs.ObjectId(req.body.client._id)}, req.body.client, {new: true}, (err, client) => {
                        if(err) {
                            console.log(err);
                            return next(err);
                        } else {
                            res.json({
                                success: true,
                                msg: 'Password Successfully Changed',
                                client: {
                                    _id: client._id,
                                    name: client.name,
                                    email: client.email
                                }
                            });
                        }
                    });
                });
            });
        } else {
            res.json({
                success: false,
                msg: 'Password Does Not Match'
            });
        }
    });
});

//Get All Clients
router.get('/clients', (req, res, next) => {
    Client.getAllClients((err, clients) => {
        if(err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'Failed to fetch all Clients'
            });
        } else {
            res.json({
                success: true,
                msg: 'Fetched all Clients',
                clients: clients
            });
        }        
    });
});

//Get Single Client
router.get('/client/:id', (req, res, next) => {
    Client.getClientById({_id: mongojs.ObjectId(req.params.id)}, (err, client) => {
        if(err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'Failed to fetch client'
            });
        } else {
            res.json({
                success: true,
                msg: 'Fetched client',
                client: client
            });
        } 
    });
});

//Update Client Info
router.put('/update/:id', (req, res, next) => {
    Client.findByIdAndUpdate({_id: mongojs.ObjectId(req.params.id)}, req.body, {new: true}, (err, client) => {
        if(err) {
            console.log(err);
            return next(err);
        } else {
            res.json({
                success: true,
                msg: 'Client Updated',
                client: client
            });
        }
    });
});

//Delete Client
router.delete('/delete/:id', (req, res, next) => {
    Client.deleteClient({_id: mongojs.ObjectId(req.params.id)}, (err, client) => {
        if(err) {
            console.log(err);
            return next(err);
        } else {
            res.json({
                success: true,
                msg: 'Client Deleted',
                client: client
            });
        }
    });
});



module.exports = router;