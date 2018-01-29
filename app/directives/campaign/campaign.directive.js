angular.module("shiffAdmin").directive("campaignDirective", function () {
    return {
      restrict: 'E',
      scope: {
        campaign: '='
      },
      templateUrl: 'directives/campaign/campaign.directive.html'
    };
  });