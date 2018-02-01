(() => {
    'use strict';
    angular.module("shiffAdmin").service('userService', ["$http", userService])

    function userService($http) {
        this.getUser = () => {
            return $http.get("../../data/user.json").then((res) => {
                return res.data;
            });
        }
    }
})();