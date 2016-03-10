/**
 * Created by Tom on 3/9/2016.
 */
"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//**Consider** adding a hook to create and update an _updatedAt_ field


var userSchema = new Schema({
    "email": {
        type: String
    },
    "username": {
        type: String,
        lowercase: true,
        required: true
    },
    "level": {
        type: Number,
        min: 0
    },
    "location": {
        type: String
    },
    "member": {
        type: Boolean
    }
});

module.exports = mongoose.model('User', userSchema);