(function(){
    var app = angular.module('myRound');

    var customersController = function ($scope, customerFactory){
        $scope.customers = [];

            init();

        function init() {
            $scope.customers = customerFactory.getCustomers();
        }

        $scope.deleteCustomer = function (id) {

            var Delete;

            var r = confirm("Delete Customer ?");
            if (r == true) {
                Delete = customerFactory.deleteCustomer(id);
            } else {
                Delete = "You pressed Cancel!";
            }



        };

    };
    app.controller("customersController", customersController);
}());
