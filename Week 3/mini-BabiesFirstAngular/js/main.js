/**
 * Created by Tom on 2/15/2016.
 */

var app = angular.module('friendsList');

app.controller('mainController',function($scope){
    $scope.friends = [
        'ben',
        'nathan',
        'sid',
        'annie',
        'guy',
        'maureen',
        'claire'
    ];
});