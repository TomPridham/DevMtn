/**
 * Created by Tom on 3/9/2016.
 */
"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartSchema = new Schema({
    products: [{
        item: {type: Schema.Types.ObjectId, ref: 'Products', required: true},
        quantity: {type: Number, min: 1}
    }]
});

module.exports = mongoose.model('Cart', cartSchema);