/**
 * Created by Tom on 2/24/2016.
 */
angular.module('rtfmApp').controller('threadsCtrl', function ($firebaseArray, threadsRef, $scope) {

    $scope.threads = $firebaseArray(threadsRef);

    $scope.createThread = function (username, title) {
        $scope.threads.$add({
            username: username,
            title: title
        })
    }
});
