// Create the Angular module
var app = angular.module('portfolioApp', ['ngRoute']);

// Configure the routes
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