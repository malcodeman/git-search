angular.module("shiffAdmin").controller("notificationController", ["$scope", function ($scope) {
    $scope.closeNotification = () => {
        document.getElementById("notification").style.display = "none";
        console.log("Close notification");
    }
}])