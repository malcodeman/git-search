angular.module("shiffAdmin").directive("notificationDirective", function () {
    return {
      restrict: 'E',
      scope: {
        notification: '='
      },
      templateUrl: 'directives/notification/notification.directive.html',
      controller: 'notificationController'
    };
  });