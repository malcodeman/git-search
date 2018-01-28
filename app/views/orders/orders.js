'use strict';

angular.module('myApp.orders', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/orders', {
    templateUrl: 'views/orders/orders.html',
    controller: 'ordersController'
  });
}])