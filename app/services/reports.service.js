angular.module("shiffAdmin").service('reportsService', ["$http", function ($http) {
    this.getReports = () => {
        return $http.get("../../data/reports.json").then((res) => {            
            return res.data.reports;
        });
    }
}]);