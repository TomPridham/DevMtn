var express = require('express');
var bodyParser = require('body-parser');
var eSesh = require('express-sessions');
var cors = require('cors');
var userCtrl = require('./controllers/userCtrl');
var profileCtrl = require('./controllers/profileCtrl');

var app = express();
var config = require('./config');
var port = 8080;
var corsOptions = {
    origin: 'http://localhost:' + port
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(eSesh({"secret": config.sessionSecret}));

var logger = function (req, res, next) {
    console.log('body --> ', req.body);
    console.log('params --> ', req.params);
    next();
};

app.listen(port, function () {
    console.log('Listening on port', port);

});
