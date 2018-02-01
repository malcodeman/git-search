(() => {
    'use strict';
    angular.module("shiffAdmin").controller("userController", ["$scope", "userService", userController]);

    function userController($scope, userService) {
        userService.getUser().then((res) => {
            $scope.user = res
        });
    }
})();