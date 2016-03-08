/**
 * Created by Tom on 3/7/2016.
 */

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var session = require('express-session');
var config = require('./config');
var mainCtrl = require('./controllers/mainCtrl');

var app = express();
var port = 8080;

app.use(bodyParser.json());
app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: false,
    resave: false
}));
app.listen(port, function(){
});

var logger = function(request, response, next){
    console.log('made it')
    next();
};
app.post('/products', mainCtrl.postProduct);

app.get('/products', mainCtrl.getProducts);
app.get('/products/:id', mainCtrl.getProduct);

app.put('/products/:id', mainCtrl.putProduct);

app.delete('/products/:id', mainCtrl.deleteProduct);
