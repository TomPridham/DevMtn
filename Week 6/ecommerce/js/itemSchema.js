/**
 * Created by Tom on 3/8/2016.
 */
"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//**Consider** adding a hook to create and update an _updatedAt_ field

var itemSchema = new Schema({
    "name": {
        type: String,
        lowercase: true,
        require: true
    },
    "price": {
        type: Number,
        require: true
    },
    "quantity": {
        type: Number,
        require: true
    },
    "freeShipping": {
        type: Boolean,
        default: false
    }
});

//sightingSchema.updatedAt.pre("updatedAt", function(){
//    return new Date();
//}
//
//);

module.exports = mongoose.model('Products', itemSchema);