/**
 * Created by Tom on 3/8/2016.
 */

var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var Sighting = require('./sighting');
var User = require('./user');

var app = express();
app.use(bodyParser.json());
app.listen(8080, function () {
    console.log('listening');
});


mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/even-more-fun");
mongoose.connection.once("open", function () {
    console.log("connected to mongodb")
});


app.post('/api/sighting', function (request, response) {
    var sighting = new Sighting(request.body);
    sighting.save(function (err, s) {
        return err ? response.status(500).json(err) : response.status(200).json(s);
    });//      if(err){response.status(500).json(err)} else{response.status(200).json(s)}

});
app.post('/api/users', function (request, response) {
    var user = new User(request.body);
    user.save(function (err, s) {
        return err ? response.status(500).json(err) : response.status(200).json(s);
    });//      if(err){response.status(500).json(err)} else{response.status(200).json(s)}

});
app.get('/api/sighting', function (request, response) {
    var query = request.query.status ? {status: request.query.status} : {};
    Sighting.find(query).populate("user").exec(function (err, s) {
        return err ? response.status(500).json(err) : response.status(200).json(s);
    });
});
app.put('/api/sighting', function (request, response) {

    Sighting.findById(request.query.id, function (err, sighting) {
        sighting.update(request.body, function (err) {
            return err ? response.status(500).json(err) : Sighting.findById(request.query.id, function (err, s) {
                return response.status(200).json(s)
            });
        })
    })
});
app.delete('/api/sighting', function (request) {
    Sighting.findByIdAndRemove(request.query.id, function (err) {
        return err ? response.status(500).json(err) : response.status(200).json(s);
    });
});