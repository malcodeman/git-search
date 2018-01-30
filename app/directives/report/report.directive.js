angular.module("shiffAdmin").directive("reportDirective", function () {
    return {
      restrict: 'E',
      scope: {
        report: '='
      },
      templateUrl: 'directives/report/report.directive.html'
    };
  });