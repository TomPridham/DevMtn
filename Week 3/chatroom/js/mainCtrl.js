app.controller('mainCtrl', function ($scope, parseService) {

    //In your controller you'll have a getParseData function and a postData function that should be placed on $scope.

    //The getParseData function will call the getData method on the parseService object. You'll then save the result of that request to
    //your controllers $scope as messages ($scope.messages)

    $scope.sortOn = 'createdAt';
    $scope.value = "+";
    $scope.getParseData = function () {

        parseService.getData().then(function (result) {
            $scope.messages = result;
        })
    };


    $scope.postData = function () {
        parseService.postData($scope.message);
        $scope.message = "";
    };
//The postData function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box) and pass that text to the postData method on the parseService object which will then post it to the parse backend.


//uncomment this code when your getParseData function is finished
//This goes and gets new data every second, which mimics a chat room experience.
    setInterval(function () {
        $scope.getParseData();
    }, 1500)

    $scope.getParseData();

});
