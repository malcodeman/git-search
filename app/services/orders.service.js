angular.module("shiffAdmin").service('ordersService', ["$http", function ($http) {
    this.getOrders = () => {
        return $http.get("../../data/orders.json").then((res) => {            
            return res.data.orders;
        });
    }
}]);