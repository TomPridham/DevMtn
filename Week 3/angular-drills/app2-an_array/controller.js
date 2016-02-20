app.controller('main2', function($scope, server2){
    $scope.items = server2.giveData();
});