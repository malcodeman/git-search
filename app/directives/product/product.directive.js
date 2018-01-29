angular.module("shiffAdmin").directive("productDirective", function () {
    return {
      restrict: 'E',
      scope: {
        product: '='
      },
      templateUrl: 'directives/product/product.directive.html'
    };
  });