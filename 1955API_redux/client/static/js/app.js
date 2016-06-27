var friends_app = angular.module('friends_app', ['ngRoute', 'ngMessages']);

    friends_app.config(function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'partials/logReg.html'
      })
      .when('/dashboard', {
        templateUrl: 'partials/success.html'
      })
      .otherwise({
        redirectTo: '/'
      })
    })
