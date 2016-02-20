app.controller('main3',function($scope, server3){
$scope.items = server3.giveData();
});