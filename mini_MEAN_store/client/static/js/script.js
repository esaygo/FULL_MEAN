var myAppModule = angular.module('myApp', ['ngRoute', 'ngMessages']);

myAppModule.config(function($routeProvider) {
  $routeProvider
    .when('/',{
      templateUrl: 'partials/dashboard.html'
    })
    .when('/customers',{
      templateUrl: 'partials/customers.html'
    })
    .when('/orders', {
      templateUrl: 'partials/orders.html'
    })
    .when('/products', {
      templateUrl: 'partials/products.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
