/**
 * Created by Tom on 2/16/2016.
 */


timeApp.controller('mainControl', function ($scope, server) {

    $scope.quotes = server.getData();


    $scope.filt = "";

    $scope.addData = function () {
        var txt = $scope.textInput;
        var auth = $scope.authorInput;
        server.addData({text: txt, author: auth})
    };
    $scope.removeData = function () {
        var txt = $scope.textInput;
        server.removeData(txt);
    };

    $scope.filterData = function () {
        var txt = $scope.textInput;
        if (!$scope.filt) {
            $scope.filt = txt;
        }
        else {
            $scope.filt = "";
        }
    };
});


//todo  blackdiamond local storage excercise
