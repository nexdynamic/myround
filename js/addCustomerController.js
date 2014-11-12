(function(){
    var app = angular.module('myRound');

    var addCustomerController = function($scope, customerFactory) {

            $scope.addCustomer = function () {
                customerFactory.postCustomer(
                    {
                        name: $scope.newCustomer.name,
                        city: $scope.newCustomer.city,
                        street: $scope.newCustomer.street,
                        houseName: $scope.newCustomer.houseName,
                        price: $scope.newCustomer.price
                    });
            };


        };



    app.controller("addCustomerController", addCustomerController);
}());