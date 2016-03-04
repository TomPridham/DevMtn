var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware');
var mainCtrl = require('./controllers/mainCtrl');
var app = express();
var port = 8080;
var products = [];

app.use(bodyParser.json());
app.use(middleware.addHeaders());

app.listen(port, function () {
    console.log('Listening on port', port);
});

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLastOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbies);
