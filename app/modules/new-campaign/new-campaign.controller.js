(() => {
    'use strict';
    angular.module("shiffAdmin").controller("new-campaignController", ["$scope", "headerInfo", newCampaignController])
    function newCampaignController() {
        let getHeaderInfo = (page) => {
            headerInfo.getHeaderInfo(page).then((res) => {
                $scope.page = res;
            })
        }
        getHeaderInfo("new-campaign");
    }
})();