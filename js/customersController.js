(function(){
    var app = angular.module('myRound');

    var customersController = function ($scope, customerFactory){
        $scope.customers = [];

            init();

        function init() {
            $scope.customers = customerFactory.getCustomers();
        }
    var deleteCheck = function(){
        alert("Are you sure you want to delete this customer ?")

    };

    };
    app.controller("customersController", customersController);
}());
