/**
 * Created by Tom on 3/9/2016.
 */
"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cartSchema = require('./cartSchema.js');

var orderSchema = new Schema({

    name: {type: String, required: true},
    email: {type: String, required: true, unique: true, index: true},
    password: {type: String, required: true},
    cart: [cart],
    orders: []
});

module.exports = mongoose.model('Orders', orderSchema);