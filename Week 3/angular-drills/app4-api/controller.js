app.controller('main4', function ($scope, server4) {

    $scope.pokemon = {};

    $scope.getData = function () {
        server4.getData($scope.query).then(
            function(response){
                $scope.pokemon = response;
            }
        );
    };

});