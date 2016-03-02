/**
 * Created by Tom on 3/2/2016.
 */
var express = require('express');
var bodyParser = require('body-parser');

var users = [{
    name: 'Jerry Seinfeld',
    city: 'New York'
}, {
    name: 'Nueman',
    city: 'New York'
}];
var app = express();
app.use(bodyParser.json());

app.get('/users', function (request, response, next) {
    response.status(200).send(users);
});

app.post('/users', function (request, response, next) {
    response.status(200).send(request.body);
});

app.delete('/users', function(request, response, next){

});

app.listen(3000, function(){
    console.log('listening on port 3k')
});


