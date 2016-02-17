var app = angular.module('chatroom', ['angularMoment']);

app.config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
});
