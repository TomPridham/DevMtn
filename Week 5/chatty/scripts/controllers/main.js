'use strict';

angular.module('chattyApp')
    .controller('MainCtrl', function ($scope, messageService) {
        messageService.getMessages().then(function (response) {
            $scope.messages = response.data;
        });

        $scope.addMessage = function (message, username) {
            if (message && username) {
                messageService.addMessage(message, username).then(function (response) {
                    $scope.messages = response.data;


                });
            }
            $('.foo').val('')
        };

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
