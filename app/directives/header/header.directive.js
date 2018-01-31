(() => {
  'use strict';
  angular.module("shiffAdmin").directive("headerDirective", () => {
    return {
      restrict: 'E',
      scope: {
        header: '='
      },
      templateUrl: 'directives/header/header.directive.html'
    };
  });
})();