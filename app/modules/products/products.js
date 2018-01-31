(() => {
  'use strict';
  angular.module('shiff-admin.modules.products', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/products', {
        templateUrl: 'modules/products/products.html',
        controller: 'productsController'
      });
    }]);
})();