angular.module("shiffAdmin").controller("homeController", ["$scope", "headerInfo", function ($scope, headerInfo) {
    let getHeaderInfo = (page) => {
        headerInfo.getHeaderInfo(page).then((res) => {
            $scope.page = res;
        })
    }
    getHeaderInfo("home");
}])