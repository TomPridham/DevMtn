/**
 * Created by Tom on 3/3/2016.
 */
var me = require('../me');

module.exports = {


    getName: function (request, response, next) {
        response.status(200).json(me.name);
    },
    getLocation: function (request, response, next) {
        response.status(200).json(me.location);
    },
    getOccupations: function (request, response, next) {
        if(request.query.order === "asc"){
            response.status(200).json(me.occupations.reverse())
        } else if(request.query.order === "desc"){
            response.status(200).json(me.occupations.sort())
        }
        response.status(200).json(me.occupations)

    },
    getLastOccupation: function (request, response, next) {
        response.status(200).json(me.occupations[me.occupations.length-1])

    },
    getHobbies: function (request, response, next) {
        response.status(200).json(me.hobbies)

    },


    putName: function (request, response, next) {
        me.name = request.body;
        response.status(204).json();
    },
    putLocation: function (request, response, next) {
        me.location = request.body;
        response.status(204).json();
    },
    postOccupations: function (request, response, next) {
        me.occupations.push(request.body);
        response.status(204).json();

    },
    postHobbies: function (request, response, next) {
        me.hobbies.push(request.body);
        response.status(204).json();
    }

};