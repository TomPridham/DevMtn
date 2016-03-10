/**
 * Created by Tom on 3/8/2016.
 */
"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//**Consider** adding a hook to create and update an _updatedAt_ field

var itemSchema = new Schema({
    "title": {
        type: String,
        lowercase: true,
        require: true,
        unique: true,
        index: true
    },
    "description": {
        type: String,
        require: true
    },
    "price": {
        type: Number,
        require: true,
        min:0
    },
    "quantity": {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('Products', itemSchema);