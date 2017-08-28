const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Admin Scheme
const AdminSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        address: {
            street: String,
            city: String,
            state: String,
            zip: String
        },
        phone: String
    },
    role: {
        type: String
    }
});

const Admin = module.exports = mongoose.model('Admin', AdminSchema);

module.exports.getAdminById = (id, callback) => {
    Admin.findById(id, callback);
}

module.exports.getAdminByEmail = (email, role, callback) => {
    const query = {$and: [{email: email}, {role: role}]};
    Admin.findOne(query, callback);
}

module.exports.addAdmin = (newAdmin, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
            if(err) {
                console.log(err);
            }
            newAdmin.password = hash;

            newAdmin.contact.address.number = newAdmin.contact.address.number;
            newAdmin.contact.address.street = newAdmin.contact.address.street;
            newAdmin.contact.address.city = newAdmin.contact.address.city;
            newAdmin.contact.address.state = newAdmin.contact.address.state;
            newAdmin.contact.address.zip = newAdmin.contact.address.zip;
            newAdmin.contact.phone = newAdmin.contact.phone;
            newAdmin.role = 'Admin';

            newAdmin.save(callback);
        });
    });
}

module.exports.comparePassword = (candidatePassword, hash, callback) => {
    bcrypt.compare(candidatePassword, hash, (err, isMatched) => {
        if (err) {
            console.log(err);
        }
        callback(null, isMatched);
    });
}