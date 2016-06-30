myAppModule.factory('orderFactory', function ($http){

  var factory = {};

  factory.index = function(callback) {
    $http.get('/orders').success(function(orders) {
      // console.log("orders: " + orders);
        callback(orders);
      })
    }
  factory.create = function(order_info, callback){

    $http.post('/orders', order_info).success(function(){
      console.log("in create factory, order_info", order_info);
      $http.get('/orders').success(function(orders){
      //console.log("in create factory, response", orders);
        callback(orders);
      })
    })
  }

  return factory;
});

myAppModule.controller('ordersController', function ($scope,  orderFactory, customerFactory, productFactory, $location){

  $scope.customers = [];
  $scope.products = [];

  orderFactory.index(function (data){
      $scope.orders = data;
  });
  productFactory.index(function(data){
      $scope.products = data;
  });

  customerFactory.index(function(data){
      $scope.customers = data;
  });

  $scope.create = function() {
    orderFactory.create($scope.new_order, function(orders){
        console.log("in create order controller, response", orders);
        if(orders.status === false){
          console.log("the product is out of stock");
          $scope.message = orders.message;
        } else {
            $scope.orders = orders;
        }

      // productFactory.update(orders.product, orders.quantity, function(){
      //     console.log("in update prod, order create", orders.product);
      //     productFactory.index(function(data){
      //       $scope.products = data;
      //     })
      // })
    });
          $scope.new_order = {};
    }

});
