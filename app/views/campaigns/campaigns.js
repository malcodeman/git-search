'use strict';

angular.module('myApp.campaigns', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/campaigns', {
    templateUrl: 'views/campaigns/campaigns.html',
    controller: 'campaignsController'
  });
}])