angular.module("shiffAdmin").controller("productsController", ["$scope", "headerInfo", "productsService", function ($scope, headerInfo, productsService) {
    let getHeaderInfo = (page) => {
        headerInfo.getHeaderInfo(page).then((res) => {
            $scope.page = res;
        })
    }
    let getAllProducts= () => {
        productsService.getProducts().then((res)=> {
            console.log(res);
            $scope.products = res;            
        });
    }
    getHeaderInfo("products");
    getAllProducts();
}])