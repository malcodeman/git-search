(() => {
    'use strict';
    angular.module("shiffAdmin").controller("ordersController", ["$scope", "headerInfo", "ordersService", "$filter", ordersController]);

    function ordersController($scope, headerInfo, ordersService, $filter) {
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
        $scope.query = '';
    }
    angular.module("shiffAdmin").filter('startFrom', filterOrders);
    function filterOrders () {
        return (input, start) => {
            start = +start;
            return input.slice(start);
        }
    }
})();