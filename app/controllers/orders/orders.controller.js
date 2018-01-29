angular.module("shiffAdmin").controller("ordersController", ["$scope", "headerInfo", "ordersService", function ($scope, headerInfo, ordersService) {
    let getHeaderInfo = (page) => {
        headerInfo.getHeaderInfo(page).then((res) => {
            $scope.page = res;
        })
    }
    getHeaderInfo("orders");
    let getAllOrders = () => {
        ordersService.getOrders().then((res) => {
            console.log(res)
            $scope.orders = res;
        })
    }
    getAllOrders();
}])