(() => {
  'use strict';
  angular.module("shiffAdmin").directive("campaignDirective", () => {
    return {
      restrict: 'E',
      scope: {
        campaign: '='
      },
      templateUrl: 'directives/campaign/campaign.directive.html'
    };
  });
})();