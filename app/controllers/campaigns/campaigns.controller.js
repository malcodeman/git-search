angular.module("shiffAdmin").controller("campaignsController", ["$scope", "headerInfo", "productsService", function ($scope, headerInfo, productsService) {
    let getHeaderInfo = (page) => {
        headerInfo.getHeaderInfo(page).then((res) => {
            $scope.page = res;
        })
    }
    let getAllCampaigns = () => {
        productsService.getProducts().then((res)=> {
            console.log(res);
            $scope.campaigns = res;            
        });
    }
    getHeaderInfo("campaigns");
    getAllCampaigns();
}])