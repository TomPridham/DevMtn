/**
 * Created by Tom on 2/16/2016.
 */

app.controller('mainController', function($scope, mainService){

    $scope.users = [];
    $scope.getUsers = function(){
        $scope.users = mainService.getUsers();
    };
    $scope.getUsers();
});