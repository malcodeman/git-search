(() => {
    'use strict';
    angular.module("shiffAdmin").service('ordersService', ["$http", ordersService])

    function ordersService($http) {
        this.getOrders = () => {
            return $http.get("../../data/orders.json").then((res) => {
                return res.data.orders;
            });
        }

    }
})();