'use strict';

angular.module('myApp.reports', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/reports', {
      templateUrl: 'views/reports/reports.html',
      controller: 'reportsController'
    });
  }]);