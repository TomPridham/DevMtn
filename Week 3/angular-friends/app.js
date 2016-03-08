/**
 * Created by Tom on 2/23/2016.
 */

angular.module('shop', ['ui.router']);

angular.module('shop').config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'home/homeView.html',
            controller: 'homeCtrl'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: 'admin/adminView.html',
            controller: 'adminCtrl'
        })
        .state('products', {
            url: '/products',
            templateUrl: 'products/productsView.html',
            controller: 'productsCtrl'

        })
});
