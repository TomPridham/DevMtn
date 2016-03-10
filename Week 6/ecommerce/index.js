/**
 * Created by Tom on 3/7/2016.
 */
"use strict";

//setup external packages
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var cors = require('cors');

//setup internal packages
var config = require('./config');
var mainCtrl = require('./private/controllers/mainCtrl');

//create app and specify port
var app = express();
var port = 8080;
//var corsOptions = "http://localhost:8080/";

//setup session, listening and parsing
app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: false,
    resave: false
}));
app.use(express.static(__dirname + "/public"));
app.listen(port);
app.use(bodyParser.json());
app.use(cors());

//open connection to mongo
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/products");
mongoose.connection.once("open", function () {
    console.log("connected to mongodb")
});
//
//var liveServer = require("live-server");
//
//var params = {
//    port: port, // Set the server port. Defaults to 8080.
//    host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0.
//    root: "./public", // Set root directory that's being server. Defaults to cwd.
//    open: true, // When false, it won't load your browser by default.
//    ignore: 'scss,my/templates', // comma-separated string for paths to ignore
//    file: "index.html", // When set, serve this file for every 404 (useful for single-page applications)
//    wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
//    mount: [['/components', './node_modules']] // Mount a directory to a route.
//};
//liveServer.start(params);

//api
app.post('/products', mainCtrl.postProduct);

app.get('/products', mainCtrl.getProducts);
app.get('/products/:id', mainCtrl.getProducts);

app.put('/products/:id', mainCtrl.putProduct);

app.delete('/products/:id', mainCtrl.deleteProduct);


app.post('/api/order/:user_id', mainCtrl.postOrder);
app.get('/api/order/', mainCtrl.getOrder);
app.post('/api/cart/:user_id', mainCtrl.postCart);
app.put('/api/cart/:user_id', mainCtrl.putCart);
app.get('/api/user/:id', mainCtrl.getUser);


// Now let's create the front-end. Feel free to set it up however you like. The only stipulations are that you should have a
// main route/state where you can see all of the products and an admin route/state where you can create, edit, or delete
// products. Don't worry about authentication or protecting your routes at this point. If you have time, start to set up your
// front-end application as you think an eCommerce site should be organized. Introduce some basic styling as well. You could
// use Bootstrap to help get things going visually.
//
// TestPoint: At this point, you should be able to go to the main view and see all of the products that are in your
// database. You should also be able to go to the admin view, where you can create, update, or delete products. As you use
// this interface, you should be able to get responses from the server, and see the data being changed in the database.