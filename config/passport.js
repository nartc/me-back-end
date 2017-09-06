const JwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;

const Admin = require('../models/admin');
const Client = require('../models/client');
const config = require('../config/database');

module.exports = (passport) => {
    let opts = {};

    opts.jwtFromRequest = extractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = config.secret;

    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        console.log(jwt_payload);
        if(jwt_payload._doc.role == 'Admin') {
            Admin.getAdminById(jwt_payload._doc._id, (err, admin) => {
                if(err) {
                    return done(err, false);
                }
    
                if(admin) {
                    return done(null, admin);
                } else {
                    return done(null, false);
                }
            });
        } else if(jwt_payload._doc.role == 'Client') {
            Client.getClientById(jwt_payload._doc._id, (err, client) => {
                if(err) {
                    return done(err, false);
                }

                if(client) {
                    return done(null, client);
                } else {
                    return done(null, false);
                }
            });
        }
    }));
}