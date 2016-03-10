/**
 * Created by Tom on 3/8/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var birdSchema = require('./bird');
//**Consider** adding a hook to create and update an _updatedAt_ field


var sightingSchema = new Schema({
    "_user":{
        type:String,
        ref:'User'
    },
    "bird": [birdSchema],
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