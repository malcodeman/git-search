(() => {
    'use strict';
    angular.module("shiffAdmin").service('productsService', ["$http", productsService])

    function productsService($http) {
        this.getProducts = () => {
            return $http.get("../../data/products.json").then((res) => {
                return res.data.products;
            });
        }
    }
})();