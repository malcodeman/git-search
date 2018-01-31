(() => {
  'use strict';
  angular.module('shiff-admin.modules.home', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/home', {
        templateUrl: 'modules/home/home.html',
        controller: 'homeController'
      });
    }]);
})();