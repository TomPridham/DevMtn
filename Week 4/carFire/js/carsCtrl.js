/**
 * Created by Tom on 2/24/2016.
 */
angular.module('carFire').controller('carsCtrl', function($scope, $firebaseArray, carsRef ){

    $scope.carsArr = $firebaseArray(carsRef);




});