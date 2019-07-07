'use strict';
var Schema = mongoose.Schema;
var config = require('./config/config.js');
var mongoose = require ('mongoose');
var express = require ('express');

var contactSchema = new Schema({  
    name: {
        type: String,
        trim: true,
        default: '',
        required: 'Name required'
      },
     email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email required'
    },
      message: {
        type: String,
        trim: true,
        default: '',
        required: 'Email required'
    },
   
});
 var Contact = mongoose.model('Contact',contactSchema);
module.exports = Contact;