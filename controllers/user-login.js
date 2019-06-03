
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongo = require('mongodb');
const express = require('express');
const session = require('express-session');
const {userSchema} = require('../models/user');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
require('dotenv').config();

var url = 'mongodb://'+process.env.DB_HOST+':'+process.env.DB_PORT+'/'+process.env.DB_NAME;

const connection = mongoose.connect(url, { useNewUrlParser: true });

module.exports = function(passport){

    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        session: true
      },

      function(username, password, done){
        let auth = {email: username};
        userSchema.findOne(auth, function(err, user){
            
            if (err) throw err;
            if (!user){
                return done (null, false, {message: 'No user found'});
            }
            
            bcrypt.compare(password, user.password, function(err, authSucces){
                if(err) throw err;
                if(authSucces){
                    
                    var user_id = user.id
                    return done(null, user.id);
                }else{
                    return done(null, false, {message: 'Wrong password'});
                }
            });
        });
    }));
    passport.serializeUser(function(user_id, done) {
        done(null, user_id);
      });
      
    passport.deserializeUser(function(user_id, done) {
        
        done(null, user_id);
        
    });
}