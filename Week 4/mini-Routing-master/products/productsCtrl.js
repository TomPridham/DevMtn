/**
 * Created by Tom on 2/22/2016.
 */
angular.module('myApp').controller('productControl', function ($scope, $stateParams, productService) {

    //$scope.productData = [];
    if ($stateParams.id === 'shoes') {
        $scope.productData = productService.shoeData;
    } else if ($stateParams.id === 'socks') {
        $scope.productData = productService.sockData;
    }
});