(() => {
  'use strict';
  angular.module("shiffAdmin").directive("productDirective", () => {
    return {
      restrict: 'E',
      scope: {
        product: '='
      },
      templateUrl: 'directives/product/product.directive.html'
    };
  });
})();