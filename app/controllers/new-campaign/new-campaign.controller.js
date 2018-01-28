angular.module("shiffAdmin").controller("new-campaignController", ["$scope", "headerInfo", function ($scope, headerInfo) {
    let getHeaderInfo = (page) => {
        headerInfo.getHeaderInfo(page).then((res) => {
            $scope.page = res;
        })
    }
    getHeaderInfo("new-campaign");
}])