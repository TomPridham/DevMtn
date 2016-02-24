/**
 * Created by Tom on 2/15/2016.
 */


timeApp.controller('homeControl', function ($scope, profileService, friendService) {

    $scope.editing = false;
    $scope.potentialFriends = {};
    $scope.myProfile = {};

    //profile methods
    $scope.checkForProfile = function () {

        var profileId = JSON.parse(localStorage.getItem('profileId'));
        if (profileId) {
            profileService.checkForProfile(profileId.profileId).then(
                function (profile) {
                    $scope.myProfile = profile.data;
                    friendService.findFriendsFriends(profile.data)
                }).catch(function (err) {
                console.log(err);
            })
        }
    };

    $scope.saveProfile = function () {
        profileService.saveProfile($scope.myProfile);
        $scope.editing = false;
    };

    $scope.deleteProfile = function () {
        profileService.deleteProfile().then(function () {
            localStorage.removeItem('profileId');
            $scope.myProfile = {};
        }).catch(function (err) {
            console.log(err);
        })
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
    //end profile methods

    //friend methods
    $scope.findFriends = function (query) {
        friendService.findFriends($scope.myProfile._id, query).then(
            function (response) {
                $scope.potentialFriends = response;
            }
        );
    };

    $scope.addFriend = function (friendId) {
        friendService.addFriend($scope.myProfile._id, friendId).then(
            function () {
                $scope.checkForProfile(friendId);
            });
    };

    $scope.removeFriend = function (friendId) {
        friendService.removeFriend($scope.myProfile._id, friendId).then(
            function (response) {
                $scope.checkForProfile();
            });
    };


    //end friend methods

    $scope.checkForProfile();
});
