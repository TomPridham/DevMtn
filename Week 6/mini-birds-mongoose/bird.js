/**
 * Created by Tom on 3/9/2016.
 */
"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new Schema({
    "name": {
        type: String,
        lowercase: true
    },
    "order": {
        type: String,
        maxlength: 20
    },
    "status": {
        type: String,
        lowercase: true,
        enum: ["extinct",
            "near threatened",
            "least concern"
        ]
    }
});