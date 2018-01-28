angular.module("shiffAdmin").controller("productsController", ["$scope","headerInfo", function ($scope, headerInfo) {
    let getHeaderInfo = () => {
        headerInfo.getHeaderInfo().then((res) => {
            $scope.page = res.products;
        })
    }
    getHeaderInfo();
}])