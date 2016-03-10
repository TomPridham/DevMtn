/**
 * Created by Tom on 3/9/2016.
 */
"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var itemSchema = require('./itemSchema.js');

var orderSchema = new Schema({
    //Orders should have two special relationships: a reference to a user, and embedded products.
    "-user": {
        type: Schema.Types.ObjectId,
        ref: User,
        require: true
    },
    "products": [{
        item: itemSchema,
        quantity: {
            type: Number,
            required: true, min: 1
        }
    }]
    ,
    ordered: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('Orders', orderSchema);