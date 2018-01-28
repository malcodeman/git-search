angular.module("shiffAdmin").controller("reportsController", ["$scope", "headerInfo", function ($scope, headerInfo) {
    let getHeaderInfo = () => {
        headerInfo.getHeaderInfo().then((res) => {
            $scope.page = res.reports;
        })
    }
    getHeaderInfo();
}])