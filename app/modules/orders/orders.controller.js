(() => {
    'use strict';
    angular.module("shiffAdmin").controller("ordersController", ["$scope", "headerInfo", "ordersService", ordersController]);

    function ordersController($scope, headerInfo, ordersService) {
        let getHeaderInfo = (page) => {
            headerInfo.getHeaderInfo(page).then((res) => {
                $scope.page = res;
            });
        }
        getHeaderInfo("orders");
        let getAllOrders = () => {
            ordersService.getOrders().then((res) => {
                $scope.orders = res;
                $scope.pageSize = 10;
                $scope.currentPage = 0;
            });
        }
        getAllOrders();
    }
})();