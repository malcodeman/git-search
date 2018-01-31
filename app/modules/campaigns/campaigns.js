(() => {
  'use strict';
  angular.module('shiff-admin.modules.campaigns', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/campaigns', {
        templateUrl: 'modules/campaigns/campaigns.html',
        controller: 'campaignsController'
      });
    }]);
})();