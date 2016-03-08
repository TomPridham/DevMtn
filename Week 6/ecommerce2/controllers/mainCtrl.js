/**
 * Created by Tom on 3/7/2016.
 */

var mongoJS = require('mongojs');
var db = mongoJS('store');
var collection = db.collection('products');

module.exports = {
    "postProduct":function(request, response){
        collection.insert(request.body, function(err, result){
            if(err){
                response.status(500).json(err);
            } else{
                response.status(200).json(result);
            }
        });
    },
    "getProducts":function(request, response){
        collection.find({}, function(err, result){
            if(err){
                response.status(500).json(err);
            } else{
                response.status(200).json(result);
            }
        });
    },
    "getProduct":function(request, response){
        var search = {"name":request.params.id};
        collection.find(search, function(err, result){
            if(err){
                response.status(500).json(err);
            } else{
                response.status(200).json(result);
            }
        });
    },
    "putProduct":function(request, response){
        collection.update(request.query.name, {$set: request.body}, function(err, result){
            if(err){
                response.status(500).json(err);
            } else{
                response.status(200).json(result);
            }
        });
    },
    "deleteProduct":function(request, response){
        collection.remove(request.query.name, function(err, result){
            if(err){
                response.status(500).json(err);
            } else{
                response.status(200).json(result);
            }
        });
    }

};