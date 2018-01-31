(() => {
  'use strict';
  angular.module('shiff-admin.modules.reports', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/reports', {
        templateUrl: 'modules/reports/reports.html',
        controller: 'reportsController'
      });
    }]);
})();