/**
 * Created by Tom on 2/22/2016.
 */

angular.module('myApp', ['ui.router']);

angular.module('myApp').config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
            templateUrl: 'home/home.html',
            url: '/',
            controller: 'homeControl'
        })
        .state('products', {
            templateUrl: 'products/products.html',
            url: '/products/:id',
            controller: 'productControl'
        })
        .state('settings', {
            templateUrl: 'settings/settings.html',
            url: '/settings',
            controller: 'settingsControl'
        });

    $urlRouterProvider.otherwise('/');
});