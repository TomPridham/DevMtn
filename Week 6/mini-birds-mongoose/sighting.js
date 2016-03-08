/**
 * Created by Tom on 3/8/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//**Consider** adding a hook to create and update an _updatedAt_ field

var sightingSchema = new Schema({
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
    },
    "confirmed": {
        type: Boolean,
        default: false
    },
    "numberSeen": {
        type: String,
        min: 1
    }
});

//sightingSchema.updatedAt.pre("updatedAt", function(){
//    return new Date();
//}
//
//);

module.exports = mongoose.model('Sighting', sightingSchema);