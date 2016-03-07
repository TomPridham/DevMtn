/**
 * Created by Tom on 3/3/2016.
 */
var me = require('../me');

module.exports = {


    getName: function (request, response) {
        response.status(200).json(me.name);
    },
    getLocation: function (request, response) {
        response.status(200).json(me.location);
    },
    getOccupations: function (request, response) {
        if (request.query.order === "asc") {
            response.status(200).json(me.occupations.reverse())
        } else if (request.query.order === "desc") {
            response.status(200).json(me.occupations.sort())
        }
        response.status(200).json(me.occupations)

    },
    getLastOccupation: function (request, response) {
        response.status(200).json(me.occupations[me.occupations.length - 1])

    },
    getHobbies: function (request, response) {
        response.status(200).json(me.hobbies)

    },
    getSkills: function (request, response) {
        var results = [];
        if (request.query.level === "Beginner") {
            for (obj in me.skills) {
                if (obj.level === "Beginner") {
                    results.push(obj)
                }
            }
            response.status(200).json(results);
        } else if (request.query.level === "Intermediate") {
            for (obj in me.skills) {
                if (obj.level === "Intermediate") {
                    results.push(obj)
                }
            }
            response.status(200).json(results);
        } else if (request.query.level === "Advanced") {
            for (obj in me.skills) {
                if (obj.level === "Advanced") {
                    results.push(obj)
                }
            }
            response.status(200).json(results);
        }
        response.status(200).json(me.occupations)
    },
    getSecrets:function(request, response){
        response.status(200).json(me.secrets)

    },


    putName: function (request, response) {
        me.name = request.body;
        response.status(204).json();
    },
    putLocation: function (request, response) {
        me.location = request.body;
        response.status(204).json();
    },
    postOccupations: function (request, response) {
        me.occupations.push(request.body);
        response.status(204).json();

    },
    postHobbies: function (request, response) {
        me.hobbies.push(request.body);
        response.status(204).json();
    },
    postSkills: function (request, response) {
        me.skills.push(request.body);
        response.status(204).json();

    }

};