(() => {
  'use strict';
  angular.module('shiff-admin.modules.new-campaign', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/new-campaign', {
        templateUrl: 'modules/new-campaign/new-campaign.html',
        controller: 'new-campaignController'
      });
    }]);
})();