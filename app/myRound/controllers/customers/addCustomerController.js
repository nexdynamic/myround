(function(){
    var app = angular.module('myRound');

    var addCustomerController = function($scope, $routeParams, customerFactory) {
        init();

        function init() {
            $scope.customers = customerFactory.getCustomers();
        }

        $scope.insertCustomer = function () {
            var customerName = $scope.newCustomer.customerName;
            var city = $scope.newCustomer.city;
            var street = $scope.newCustomer.street;
            var houseName = $scope.newCustomer.houseName;
            var price = $scope.newCustomer.price;

            customerFactory.insertCustomer(customerName, city, street, houseName, price);
            $scope.newCustomer.customerName = '';
            $scope.newCustomer.city = '';
            $scope.newCustomer.street = '';
            $scope.newCustomer.houseName = '';
            $scope.newCustomer.price = '';
        };

        };

    app.controller("addCustomerController", addCustomerController);
}());