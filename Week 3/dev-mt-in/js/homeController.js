/**
 * Created by Tom on 2/15/2016.
 */


myApp.controller('homeControl', function ($scope, profileService) {

    $scope.editing = false;

    $scope.myProfile = {};

    $scope.checkForProfile = function () {

        var profileId = JSON.parse(localStorage.getItem('profileId'));
        if (profileId.profileId) {
            profileService.checkForProfile(profileId.profileId).
            then(function (profile) {
                $scope.myProfile = profile.data;
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
        profileService.deleteProfile().
        then(function(deletedProfile){
            localStorage.removeItem('profileId')
            $scope.myProfile = {};
        }).
        catch(function(err){
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
    $scope.checkForProfile();
});
