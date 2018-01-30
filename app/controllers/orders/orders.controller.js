angular.module("shiffAdmin").controller("ordersController", ["$scope", "headerInfo", "ordersService", "$filter", function ($scope, headerInfo, ordersService, $filter) {
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
    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.q = '';
}]);

angular.module("shiffAdmin").filter('startFrom', function () {
    return function (input, start) {
        start = +start;
        return input.slice(start);
    }
});