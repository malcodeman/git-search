(() => {
  'use strict';
  angular.module("shiffAdmin").directive("notificationDirective", () => {
    return {
      restrict: 'E',
      scope: {
        notification: '='
      },
      templateUrl: 'directives/notification/notification.directive.html',
      controller: 'notificationController'
    };
  });
})();