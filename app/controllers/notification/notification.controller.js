(() => {
    'use strict';
    angular.module("shiffAdmin").controller("notificationController", ["$scope", notificationController]);
    function notificationController($scope) {
        $scope.closeNotification = () => {
            document.getElementById("notification").style.display = "none";
        }
    }
})();