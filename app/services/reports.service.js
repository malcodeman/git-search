(() => {
    'use strict';
    angular.module("shiffAdmin").service('reportsService', ["$http", reportsService])

    function reportsService($http) {
        this.getReports = () => {
            return $http.get("../../data/reports.json").then((res) => {
                return res.data.reports;
            });
        }
    }
})();