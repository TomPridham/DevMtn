/**
 * Created by Tom on 2/24/2016.
 */
angular.module('rtfmApp').controller('threadCtrl',
    function ($firebaseObject, $firebaseArray, threadRef, $scope, commentsRef) {

        var thread = $firebaseObject(threadRef);
        thread.$bindTo($scope, 'thread');

        $scope.comments = $firebaseArray(commentsRef);

        $scope.createComment = function (username, text) {
            $scope.comments.$add({username: username, text: text});
        }

    });
