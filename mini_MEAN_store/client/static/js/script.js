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
    .when('/settings', {
      templateUrl: 'partials/settings.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});

myAppModule.factory('customerFactory', function ($http){

  var factory = {};

  factory.index = function(callback) {
    $http.get('/customers').success(function(customers) {
      console.log("customers: " + customers);
        callback(customers);
      })
    }
  factory.create = function(customer_info, callback){
    $http.post('/customers', customer_info).success(function(customers){
      console.log("in create factory, response", customers);
      callback(customers);
    })
  }
  factory.delete = function(customerID, callback) {
    $http.post('/customers/'+ customerID).success(function(customers){
      callback(customers);
    })
  }

  return factory;
});

myAppModule.factory('productFactory', function ($http){

  var factory = {};


  factory.index = function(callback) {
    $http.get('/products').success(function(products) {
      console.log("products: " + products);
        callback(products);
      })
    }
  factory.create = function(product_info, callback){
    $http.post('/products', product_info).success(function(products){
      console.log("in create factory, response", products);
        callback(products);
    })
  }

  return factory;
});

myAppModule.controller('customersController', function ($scope, customerFactory, $location){
  console.log($scope);

  customerFactory.index(function (data){
      $scope.customers = data;
  });
  // function checkErrors(){
  //   var obj = $scope.playersForm.$error;
  //   return Object.keys(obj).length;
  // }
  $scope.create = function() {
    customerFactory.create($scope.new_customer, function(customers){
      console.log("in create factory, response", customers);
      if(customers.status === false){
        //console.log("the customer already exists");
        $scope.message = "the customer already exists";
      } else {
        $scope.customers = customers;
      }
    });
    $scope.new_customer = {};
    }

  $scope.delete = function(customerID) {
    customerFactory.delete(customerID, function(customers){
        $scope.customers = customers;
  })
}

});

myAppModule.controller('productsController', function ($scope, productFactory, $location){
  console.log($scope);

  productFactory.index(function (data){
      $scope.products = data;
  });

  $scope.create = function() {
    productFactory.create($scope.new_product, function(products){
      console.log("in create factory, response", products);
      if(products.status === false){
        //console.log("the product already exists");
        $scope.message = products.message;
      } else {
        $scope.products = products;
      }
    });
    $scope.new_product = {};
    }



});
