/**
 * Created by Tom on 2/16/2016.
 */
timeApp.controller('mainController', function ($scope, mainService) {

    $scope.reallyLike = myService.reallyLike;
    $scope.kindOfLike = myService.kindOfLike;

    $scope.addArtist = function () {
        var artist = buildArtist();
        myService.addNewArtist(artist);
        clearArtist();
    };

    //constructor for artists
    function buildArtist() {
        return {
            name: $scope.name,
            genre: $scope.genre,
            rating: $scope.rating
        }
    }

    //resets input fields
    function clearArtist() {
        $scope.name = '';
        $scope.genre = '';
        $scope.rating = '';
    }

});