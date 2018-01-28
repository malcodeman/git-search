'use strict';

angular.module('myApp.new-campaign', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/new-campaign', {
    templateUrl: 'views/new-campaign/new-campaign.html',
    controller: 'new-campaignController'
  });
}])