/**
 * Created by Tom on 3/8/2016.
 */
"use strict";
angular.module('shop').controller('adminCtrl', function ($scope) {
    $http.get('http://localhost:8080/products').then(function (result) {
        $scope.products = result;
    });
});