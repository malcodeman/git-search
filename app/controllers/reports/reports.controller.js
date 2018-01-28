angular.module("shiffAdmin").controller("reportsController", ["$scope", "headerInfo", function ($scope, headerInfo) {
    let getHeaderInfo = (page) => {
        headerInfo.getHeaderInfo(page).then((res) => {
            $scope.page = res;
        })
    }
    getHeaderInfo("reports");
}])