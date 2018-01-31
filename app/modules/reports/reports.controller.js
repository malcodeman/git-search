(() => {
    'use strict';
    angular.module("shiffAdmin").controller("reportsController", ["$scope", "headerInfo", "reportsService", reportsController])
    function reportsController($scope, headerInfo, reportsService) {
        let getHeaderInfo = (page) => {
            headerInfo.getHeaderInfo(page).then((res) => {
                $scope.page = res;
            })
        }
        let getAllReports = () => {
            reportsService.getReports().then((res) => {
                $scope.reports = res;
            });
        }
        getHeaderInfo("reports");
        getAllReports();
    }
})();