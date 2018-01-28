angular.module("shiffAdmin").service('headerInfo', ["$http", function ($http) {
    this.getHeaderInfo = () => {
        return $http.get("../../data/header.json").then((res) => {
            console.log(res.data);
            return res.data;
        });
    }
}]);