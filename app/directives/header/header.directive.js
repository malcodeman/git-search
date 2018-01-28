angular.module("shiffAdmin").directive("headerDirective", function () {
    return {
      restrict: 'E',
      scope: {
        header: '='
      },
      templateUrl: 'directives/header/header.directive.html'
    };
  });