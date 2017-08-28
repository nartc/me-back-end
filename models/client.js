const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Client Schema
const ClientSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        set: toLower,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        address: {
            street: String,
            street2: String,
            city: String,
            state: String,
            zip: String
        },
        phone: String
    },
    balance: {
        type: Number
    },
    role: {
        type: String
    }
});

function toLower(str) {
    return str.toLowerCase();
}

const Client = module.exports = mongoose.model('Client', ClientSchema);

module.exports.getClientById = (id, callback) => {
    Client.findById(id, callback);
}

module.exports.getClientByEmail = (email, role, callback) => {
    const query = {$and: [{email: email}, {role: role}]};
    Client.findOne(query, callback);
}

module.exports.getAllClients = (callback) => {
    Client.find(callback);
}

module.exports.addClient = (newClient, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newClient.password, salt, (err, hash) => {
            if (err) {
                console.log(err);
            }

            newClient.password = hash;

            newClient.contact.address.number = newClient.contact.address.number;
            newClient.contact.address.street = newClient.contact.address.street;
            newClient.contact.address.street2 = newClient.contact.address.street2;
            newClient.contact.address.city = newClient.contact.address.city;
            newClient.contact.address.state = newClient.contact.address.state;
            newClient.contact.address.zip = newClient.contact.address.zip;
            newClient.contact.phone = newClient.contact.phone;

            newClient.role = 'Client';

            newClient.save(callback);
        });
    });
}

module.exports.comparePassword = (candidatePassword, hash, callback) => {
    bcrypt.compare(candidatePassword, hash, (err, isMatched) => {
        if(err) {
            console.log(err);
        } 
        callback(null, isMatched);
    });
}

module.exports.deleteClient = (id, callback) => {
    Client.remove(id, callback);
}