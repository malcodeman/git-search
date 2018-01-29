angular.module("shiffAdmin").service('campaignsService', ["$http", function ($http) {
    this.getCampaigns = () => {
        return $http.get("../../data/campaigns.json").then((res) => {            
            return res.data.campaigns;
        });
    }
}]);