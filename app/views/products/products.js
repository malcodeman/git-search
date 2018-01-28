'use strict';

angular.module('myApp.products', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/products', {
    templateUrl: 'views/products/products.html',
    controller: 'productsController'
  });
}])