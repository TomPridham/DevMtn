/**
 * Created by Tom on 3/2/2016.
 */

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 8080;

app.use(express.static());