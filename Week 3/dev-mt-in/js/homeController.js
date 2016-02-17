/**
 * Created by Tom on 2/15/2016.
 */


myApp.controller('homeControl', function ($scope, profileService) {

    $scope.editing = false;

    $scope.myProfile = profileService.checkForProfile();

    $scope.saveProfile = function(){
        profileService.saveProfile($scope.myProfile);
        $scope.editing = false;
    };

    $scope.deleteProfile = function(){
        profileService.deleteProfile($scope.myProfile);
        $scope.myProfile = profileService.checkForProfile();
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
