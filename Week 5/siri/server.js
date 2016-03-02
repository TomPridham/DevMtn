/**
 * Created by Tom on 3/2/2016.
 */

var express = require('express');

var app = express();
app.listen(8887, function (request, response, next) {
    console.log('Listening on port 8887');
});

var messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that."];

var getMessage = function(){
    var index = Math.floor((3*Math.random()));
    return messages[index];
};

app.get('/', function(request, response, next){


    response.status(200).json(JSON.stringify({message : getMessage()}))
});