(() => {
    'use strict';
    angular.module("shiffAdmin").controller("reportController", ["$scope", reportController]);
    function reportController($scope) {
        $scope.limit = 2;
    }
})();