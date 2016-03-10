/**
 * Created by Tom on 3/9/2016.
 */
"use strict";

angular.module('shop', ['ui.router']);

angular.module('shop').config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'routes/home/home.html',
            controller: 'homeCtrl'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: 'routes/admin/admin.html',
            controller: 'adminCtrl'
        })
        .state('products', {
            url: '/products',
            templateUrl: 'routes/products/products.html',
            controller: 'productsCtrl'

        })
});
