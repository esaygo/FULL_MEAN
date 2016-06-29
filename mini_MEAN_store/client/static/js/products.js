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
  // factory.update= function(product_id, ordered_quantity, callback){
  //   console.log("in prod factory update", product_id);
  //   $http.post('/products/' + product_id + '/update', ordered_quantity).success(function(results){
  //     callback(results);
  //   })
  // }

  return factory;
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
