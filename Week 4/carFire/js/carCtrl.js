/**
 * Created by Tom on 2/24/2016.
 */
angular.module('carFire').controller('carCtrl', function ($scope, $firebaseObject, $firebaseArray, carRef, commentsRef) {


    $scope.car = $firebaseObject(carRef);
    $scope.comments = $firebaseArray(commentsRef);

    $scope.sendComment = function(){
        $scope.comments.$add({
            text:$scope.newComment,
            timestamp:new Date().getTime()
        })
        $scope.newComment = '';
    }



});