(() => {
  'use strict';
  angular.module('shiffAdmin', [
    'ngRoute',
    'shiff-admin.modules',
  ]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({
      redirectTo: '/home'
    });
  }]);
})();