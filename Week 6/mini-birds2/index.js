/**
 * Created by Tom on 3/7/2016.
 */
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoJS = require('mongojs');
var config = require('./config');

var port = 8080;
var app = express();

app.use(bodyParser.json());
app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: false,
    resave: false
}));

app.listen(port, function(){
    console.log('whatever');
});

var db = mongoJS("bird-sightings");
var collection = db.collection("sightings");
//collection.insert('./birds.json');


app.get('/api/sighting', function(request, response){
    collection.find(request.body.id, function(err, result){
        if(err){
            response.status(500).json(err);
        } else{
            response.status(200).json(result);
        }
    });
});
app.put('/api/sighting', function(request, response){
    collection.update(request.body.id, {$set: {"whatever":"junk"}}, function(err, result) {
        if(err){
            response.status(500).json(err);
        } else{
            response.status(200).json(result);
        }
    });
});
app.post('/api/sighting', function(request, response){
    collection.insert(request.body, function(err, result){
       if(err){
           response.status(500).json(err);
       } else{
           response.status(200).json(result);
       }
    });
});
app.delete('/api/sighting', function(request, response){
    collection.delete(request.body.id, function(err, result){
        if(err){
            response.status(500).json(err);
        } else{
            response.status(200).json(result);
        }
    });});