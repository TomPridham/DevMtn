var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var config = require('./config.json');

var BookController = require('./controllers/BookController');

var logger = function (req, res, next) {
    console.log('body --> ', req.body);
    console.log('params --> ', req.params);
    console.log('session --> ', req.session);
    next();
};

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: false,
    resave: false
}));

app.get('/books', logger, BookController.index);
app.get('/books/:idx', BookController.show);
app.put('/books/:idx', BookController.update);
app.post('/books', BookController.create);
app.delete('/books/:idx', BookController.destroy);

app.get('/cart', function(request, response, next){
    response.status(200).json(req.session.cart)
});
app.post('/cart', function (request, response, next) {
    if (request.session.cart) {
        request.session.cart = [];
    }
    request.session.cart.push(req.body);
    response.status(204).send()
});

var port = 3000;
app.listen(port, function () {
    console.log('listening to port ', port);
});
