(() => {
    'use strict';
    angular.module("shiffAdmin").controller("notificationController", ["$scope", function ($scope) {
        $scope.closeNotification = () => {
            document.getElementById("notification").style.display = "none";
        }
    }]);
})();