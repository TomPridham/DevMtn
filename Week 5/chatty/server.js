
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.listen(8000, function(){
    console.log('listening')
});

app.options('/', function(request, response, next){
    response.set({'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'}).send();
});

var messages = [{"message":"poop","username":"urmom", "time":"3/5/2322 8am"},{"message":"whatever", "username":"urmom", "time":"3/5/2322 10am"},{"message":"bruv","username":"no bruv, urmom", "time":"3/5/2322 10am"}];

app.get('/', function(request, response, next){
    response.status(200).set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'X-XSS-Protection': '1; mode=block',
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    }).send(JSON.stringify(messages));
});

app.post('/', function(request, response, next){
    console.log(request.body);
    messages.push({"message":request.body.message, "username":request.body.username, "time":new Date()});
    response.status(200).set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'X-XSS-Protection': '1; mode=block',
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    }).json(messages);
});