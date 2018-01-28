angular.module("shiffAdmin").controller("ordersController", ["$scope", "headerInfo", function ($scope, headerInfo) {
    let getHeaderInfo = () => {
        headerInfo.getHeaderInfo().then((res) => {
            $scope.page = res.orders;
        })
    }
    getHeaderInfo();
}])