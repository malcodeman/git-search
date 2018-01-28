angular.module("shiffAdmin").controller("ordersController", ["$scope", "headerInfo", function ($scope, headerInfo) {
    let getHeaderInfo = (page) => {
        headerInfo.getHeaderInfo(page).then((res) => {
            $scope.page = res;
        })
    }
    getHeaderInfo("orders");
}])