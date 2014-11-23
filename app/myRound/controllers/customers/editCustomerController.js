(function () {
    var app = angular.module('myRound');
    app.controller('editCustomerController', function ($scope, $routeParams, customerFactory) {
        $scope.customer = {};

        init();

        function init() {
            //Grab customerID off of the route
            var customerID = ($routeParams.customerID) ? parseInt($routeParams.customerID) : 0;
            if (customerID > 0) {
                $scope.customer = customerFactory.getCustomer(customerID);
            }
        }

        app.controller("editCustomerController", editCustomerController);
    });
}());
