/**
 * Created by Tom on 2/23/2016.
 */

angular.module('timeApp').controller('mainCtrl', function($scope){

    $scope.name = 'Tom';
    $scope.ctrlFormat = 'medium';

    $scope.updateFormat = function () {
        if ($scope.ctrlFormat === "medium"){
            $scope.ctrlFormat = "short";
        }
        else{
            $scope.ctrlFormat = "medium";
        }
    };
});