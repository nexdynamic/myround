(function () {
    var app = angular.module("customers", function (customersFactory) {

    });

    var customersDb = new PouchDB('customers');

    var factory = {};

    app.factory('customersFactory', function () {
        factory.getCustomers = function () {
            return new Promise(function (resolve) {
                customersDb.allDocs({include_docs: true})
                    .then(function (data) {
                        var responseData = data.rows.map(function (row) {
                            return row.doc;
                        });
                        resolve(responseData);
                    });
            });
        };

        factory.insertCustomer = function (customer) {
            return new Promise(function (resolve, reject) {

                customersDb.post(customer, function (err, response) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(response);
                    }
                });

            });
        };

        factory.deleteCustomer = function (customer) {
            return new Promise(function (resolve, reject) {
                customersDb.remove(customer, function (err, response) {
                    if (err) {
                        reject(err);
                        console.log("could not delete customer" + err);
                    } else {
                        resolve(response);
                        console.log("removed customer")
                    }
                });
            });
        };

        factory.updateCustomer = function (customer) {
            return new Promise(function (resolve, reject) {

                customersDb.put(customer, function (err, response) {
                    customer._rev = response.rev;
                    if (err) {
                        console.log(JSON.stringify(err));
                        reject(err);
                    } else {
                        resolve(response);
                        console.log('Updated customer')
                    }
                });

            });
        };

        return factory;

    });


    app.controller("customersController", function ($scope, customers, customersFactory) {
        $scope.customers = customers;
        $scope.customersGrid = customers;

        $scope.refreshCustomers = function () {

            customersFactory.getCustomers().then(function (customers) {

                $scope.$apply(function () {
                    $scope.customers = customers;
                    $scope.customersGrid = customers
                });
            });
        };

        $scope.deleteCustomer = function (id) {
            var uSure = confirm("Delete Customer ?");
            if (uSure == true) {
                customersFactory.deleteCustomer(id).then(function () {
                    $scope.$apply(function () {
                        $scope.refreshCustomers();
                    });
                });
            }
        };
    });

    app.controller("addCustomerController", function ($scope, $location, customersFactory) {

        $scope.insertCustomer = function () {
            customersFactory.insertCustomer($scope.newCustomer);
            $location.path('customers');
            $scope.newCustomer = {}
        };
    });

    app.controller('editCustomerController', function ($scope, $routeParams, customersFactory) {


    });

})();

