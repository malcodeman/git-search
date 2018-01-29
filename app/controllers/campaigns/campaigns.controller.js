angular.module("shiffAdmin").controller("campaignsController", ["$scope", "headerInfo", "campaignsService", function ($scope, headerInfo, campaignsService) {
    let getHeaderInfo = (page) => {
        headerInfo.getHeaderInfo(page).then((res) => {
            $scope.page = res;
        })
    }
    let getAllCampaigns = () => {
        campaignsService.getCampaigns().then((res)=> {
            console.log(res);
            $scope.campaigns = res;            
        });
    }
    getHeaderInfo("campaigns");
    getAllCampaigns();
}])