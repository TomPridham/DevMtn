/**
 * Created by Tom on 3/7/2016.
 */
"use strict";
var mongoose = require('mongoose');
var Item = require('../itemSchema');

module.exports = {
    "postProduct": function (request, response) {
        var item = new Item(request.body);
        item.save(function (err, s) {
            return err ? response.status(500).json(err) : response.status(200).json(s);
        });//      if(err){response.status(500).json(err)} else{response.status(200).json(s)}

    },
    "getProducts": function (request, response) {
        var id = request.params.id ? {_id: request.params.id} : {};

        Item.find(id, function (err, s) {
            return err ? response.status(500).json(err) : response.status(200).json(s);
        });
    },
    "putProduct": function (request, response) {
        Item.findById(request.params.id, function (err, item) {
            item.update(request.body, function (err) {
                return err ? response.status(500).json(err) : Item.findById(request.params.id, function (err, s) {
                    return response.status(200).json(s)
                });
            })
        })
    },
    "deleteProduct": function (request, response) {
        Item.findByIdAndRemove(request.params.id, function (err) {
            return err ? response.status(500).json(err) : response.send("Success");
        });
    }

};