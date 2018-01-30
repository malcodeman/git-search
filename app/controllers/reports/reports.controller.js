angular.module("shiffAdmin").controller("reportsController", ["$scope", "headerInfo", "reportsService", function ($scope, headerInfo, reportsService) {
    let getHeaderInfo = (page) => {
        headerInfo.getHeaderInfo(page).then((res) => {
            $scope.page = res;
        })
    }
    let getAllReports = () => {
        reportsService.getReports().then((res)=> {
            console.log(res);
            $scope.reports = res;            
        });
    }
    getHeaderInfo("reports");
    getAllReports();
}])