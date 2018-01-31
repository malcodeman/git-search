(() => {
    'use strict';
    angular.module("shiffAdmin").controller("homeController", ["$scope", "headerInfo", homeController])
    function homeController($scope, headerInfo) {
        let getHeaderInfo = (page) => {
            headerInfo.getHeaderInfo(page).then((res) => {
                $scope.page = res;
            })
        }
        getHeaderInfo("home");
    }
})();