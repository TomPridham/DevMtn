/**
 * Created by Tom on 2/22/2016.
 */
angular.module('myApp',['ui.router']);

angular.module('myApp').config(function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('home',
            {
                templateUrl:'components/home/homeView.html',
                url:'/',
                controller: 'homeCtrl'
            }
        )

    $urlRouterProvider.otherwise('/');
});