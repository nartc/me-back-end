const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Admin = require('../models/admin');
const config = require('../config/database');

//Register Admin
router.post('/register', (req, res, next) => {
    let newAdmin = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        contact: req.body.contact
    });

    Admin.addAdmin(newAdmin, (err, admin) => {
        if(err) {
            res.json({
                success: false,
                msg: 'Failed to register Admin',
                err: err
            });
        } else {
            res.json({
                success: true,
                msg: 'New Admin Registered',
                admin: admin
            });
        }
    });
});

//Authenticate Admin
router.post('/authenticate', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const role = "Admin";


    Admin.getAdminByEmail(email, role, (err, admin) => {
        if(err) {
            console.log(err);
        }
        if(!admin) {
            return res.json({
                success: false,
                msg: 'Admin Not Found'
            });
        }

        Admin.comparePassword(password, admin.password, (err, isMatched) => {
            console.log(password, admin.password);
            if(err) throw err;
            if(isMatched) {
                const token = jwt.sign(JSON.stringify(admin), config.secret, {
                    expiresIn: "30m"//30 Minutes
                });

                res.json({
                    success: true,
                    token: 'JWT ' +token,
                    msg: 'Logged In',
                    admin: {
                        _id: admin._id,
                        name: admin.name,
                        email: admin.email,
                        role: admin.role
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
        admin: req.user
    });
});

//Change Password
router.put('/password', (req, res, next) => {
    let candidatePassword = req.body.candidatePassword;
    let newPassword = req.body.newPassword;
    let currentPassword = req.body.admin.password;

    Admin.comparePassword(candidatePassword, currentPassword, (err, isMatched) => {
        if(err) {
            console.log(err);
        } 
        if(isMatched) {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newPassword, salt, (err, hash) => {
                    newPassword = hash;
                    req.body.admin = {
                        _id: req.body.admin._id,
                        name: req.body.admin.name,
                        email: req.body.admin.email,
                        contact: req.body.admin.contact,
                        password: newPassword
                    }

                    Admin.findByIdAndUpdate({_id: mongojs.ObjectId(req.body.admin._id)}, req.body.admin, {new: true}, (err, admin) => {
                        if(err) {
                            console.log(err);
                            return next(err);
                        } else {
                            res.json({
                                success: true,
                                msg: 'Password Successfully Changed',
                                admin: {
                                    _id: admin._id,
                                    name: admin.name,
                                    email: admin.email
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

module.exports = router;