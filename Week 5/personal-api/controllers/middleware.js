/**
 * Created by Tom on 3/3/2016.
 */

var config = require("../config.json");
var secret = config.sessionSecret;
var username = config.username;

module.exports = {

    addHeaders: function (request, response, next) {
        response.status(200).set({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'X-XSS-Protection': '1; mode=block',
            'X-Frame-Options': 'SAMEORIGIN',
            'Content-Security-Policy': "default-src 'self' devmountain.github.io"
        });

        next();
    },
    verifyUser: function(request, response, next){
        console.log(request.params);
        if(request.params.pin === secret && request.params.username === username){
            next();
        }else{
            response.status(401).json({"message":"You're not authorized to be here"});
        }
    }
};