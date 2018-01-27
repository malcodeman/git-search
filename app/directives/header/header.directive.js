angular.module("shiffAdmin").directive("headerDirective", function () {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'directives/header/header.directive.html'
    };
  });