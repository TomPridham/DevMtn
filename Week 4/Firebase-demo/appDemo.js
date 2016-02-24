/**
 * Created by Tom on 2/24/2016.
 */
angular.module('russianRoulette', ['firebase'])
    .controller('mainCtrl', function ($scope, $firebaseObject, firebaseService) {
        var ref = firebaseService.getRootRef();
        $scope.game = $firebaseObject(ref.child('game'));
        $scope.newGame = function () {

            $scope.game.chambers = [];
            $scope.game.currentChamber = 0;
            $scope.game.deadPerson = false;


            var bullet = Math.floor(Math.random() * 6);
            for (var i = 0; i < 6; i++) {
                if (i === bullet) {
                    $scope.game.chambers.push(true);
                } else {
                    $scope.game.chambers.push(false);
                }
            }
            $scope.game.$save();
        };

        $scope.pullTrigger = function(){
            var index = $scope.game.currentChamber;
            if ($scope.game.chambers[index]) {
                youDied();
            }else{
                incrementChamber();
            }
        };

        function youDied(){
            alert('Boom! You died');
            $scope.game.deadPerson = true;
            $scope.game.$save();
        };

        function incrementChamber(){
            $scope.game.currentChamber++;
            $scope.game.$save();
        };
    })
    .service('firebaseService', function () {
        this.getRootRef = function () {
            return new Firebase('https://glowing-heat-682.firebaseio.com')
        }
    });