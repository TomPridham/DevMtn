/**
 * Created by Tom on 2/15/2016.
 */

var homeApp = angular.module('devMtIn');

homeApp.controller('homeControl',function($scope){

    $scope.myProfile = {
        friends: [{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]
    };

    $scope.sortOptions = [{
        display: 'Ascending'
        , value: false
    },
        {
            display: 'Descending'
            , value: true
        }
    ];
});
