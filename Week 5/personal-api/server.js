var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware');
var mainCtrl = require('./controllers/mainCtrl');
var app = express();
var port = 8080;

app.use(bodyParser.json());
app.use(middleware.addHeaders);
var logger = function (req, res, next) {
    console.log('body --> ', req.body);
    console.log('params --> ', req.params);
    next();
};

app.listen(port, function () {
    console.log('Listening on port', port);
});

app.get('/name', logger, mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLastOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbies);

app.put('/name', logger, mainCtrl.putName);
app.put('/location', mainCtrl.putLocation);
app.post('/occupations', mainCtrl.postOccupations);
app.post('/hobbies', mainCtrl.postHobbies);