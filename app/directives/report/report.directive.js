(() => {
  'use strict';
  angular.module("shiffAdmin").directive("reportDirective", () => {
    return {
      restrict: 'E',
      scope: {
        report: '='
      },
      templateUrl: 'directives/report/report.directive.html',
      controller: 'reportController'
    };
  });
})();