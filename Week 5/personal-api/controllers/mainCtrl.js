/**
 * Created by Tom on 3/3/2016.
 */

module.exports = {

    getName: function (request, response, next) {
        response.status(200).json({name:"Tom P"});
    },
    getLocation: function (request, response, next) {
        response.status(200).json({location:"Salt Lake City, UT"});
    },
    getOccupations: function (request, response, next) {

    },
    getLastOccupation: function (request, response, next) {

    },
    getHobbies: function (request, response, next) {

    }

};