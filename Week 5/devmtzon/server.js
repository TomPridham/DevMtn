var express = require('express');
var bodyParser = require('body-parser');
var lodash = require('lodash');
var app = express();
var port = 8080;
var products = [];

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


app.listen(port, function () {
    console.log('Listening on port', port);
});

app.get('/api/getProductList', function(request, response, next){
    response.status(200).send(products);
});

app.get('/api/getProductList/:id', function(request, response, next){
    response.status(200).send(products[request.params.id])
});

app.post('/api/getProductList', function(request, response, next){
    products.push(request.body);
    response.status(204).send();
});

app.put('/api/getProductList/:id', function(request, response, next){
    var id = request.params.id;
    var product = {};
    for(var i = 0; i < products.length; i++){
        product = products[i];
        if(product.id == id){
            product = request.body;
            response.status(200).send(product);
        }
    }
    response.status(400).send('Sorry, we couldn\'t find that product.')
});

app.delete('/api/getProductList/:id', function(request, response, next){
    var id = request.params.id;
    var product = {};
    for(var i = 0; i < products.length; i++){
        product = products[i];
        if(product.id == id){
            products.splice(i,1);
            response.status(204).send();
        }
    }
    response.status(400).send('Sorry, we couldn\'t find that product.')
});