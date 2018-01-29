angular.module("shiffAdmin").service('productsService', ["$http", function ($http) {
    this.getProducts = () => {
        return $http.get("../../data/products.json").then((res) => {            
            return res.data.products;
        });
    }
}]);