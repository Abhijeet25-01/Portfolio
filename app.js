
var app = angular.module('portfolioApp', ['ngRoute']);


app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html'
    })
    .when('/about', {
      templateUrl: 'pages/about.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
