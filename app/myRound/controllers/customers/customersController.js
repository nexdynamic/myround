(function(){
    var app = angular.module('myRound');

    var customersController = function ($scope, customerFactory){
        $scope.customers = [];

            init();

        function init() {
            $scope.customers = customerFactory.getCustomers();
        }

    };
    app.controller("customersController", customersController);
}());
