var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware');
var mainCtrl = require('./controllers/mainCtrl');
var session = require('express-session');
var config = require('./config');

var app = express();
var port = 8080;

app.use(bodyParser.json());
app.use(middleware.addHeaders);
var logger = function (req, res, next) {
    console.log('body --> ', req.body);
    console.log('params --> ', req.params);
    next();
};

app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: false,
    resave: false
}));

app.listen(port, function () {
    console.log('Listening on port', port);

});

app.get('/name', logger, mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLastOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbies);
app.get('/skills', mainCtrl.getSkills);
app.get('/skills/:level', mainCtrl.getSkills);
app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets);

app.put('/name', logger, mainCtrl.putName);
app.put('/location', mainCtrl.putLocation);
app.post('/occupations', mainCtrl.postOccupations);
app.post('/hobbies', mainCtrl.postHobbies);
app.post('/skills', mainCtrl.postSkills);