angular.module("shiffAdmin").controller("campaignsController", ["$scope", "headerInfo", function ($scope, headerInfo) {
    let getHeaderInfo = () => {
        headerInfo.getHeaderInfo().then((res) => {
            $scope.page = res.campaigns;
        })
    }
    getHeaderInfo();
}])