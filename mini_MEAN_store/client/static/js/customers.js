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
