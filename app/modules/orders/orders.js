(() => {
  'use strict';
  angular.module('shiff-admin.modules.orders', ['ngRoute', 'ui.bootstrap'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/orders', {
        templateUrl: 'modules/orders/orders.html',
        controller: 'ordersController'
      });
    }]);
})();