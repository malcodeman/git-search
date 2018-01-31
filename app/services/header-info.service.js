(() => {
    'use strict';
    angular.module("shiffAdmin").service('headerInfo', ["$http", headerInfo])

    function headerInfo($http) {
        this.getHeaderInfo = (page) => {
            return $http.get("../../data/header.json").then((res) => {
                console.log(res.data[page]);
                return res.data[page];
            });
        }
    }
})();