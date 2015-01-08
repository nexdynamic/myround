(function () {
    var app = angular.module("customers", function (customersFactory) {

    });



    var customersDb = new PouchDB('customers');
    var factory = {};
    app.factory('customersFactory', function () {

        // factory.customersDb = new PouchDB('customers');
        factory.getCustomers = function () {
            return new Promise(function (resolve) {
                customersDb.allDocs({include_docs: true})
                    .then(function (data) {
                        var responseData = data.rows.map(function (row) { return row.doc; });
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

        factory.deleteCustomer = function (id) {
            return customersDb.get(id, function(err, doc) {
                return customersDb.remove(doc);
            });
        };

        factory.getCustomer = function (id) {
            return new Promise(function (resolve) {
                customersDb.get(id).then(
                    function (data) {
                        resolve(data);
                    });
            });
        };
        return factory;

    });

    app.config(function ($routeProvider) {
        $routeProvider.when('/customers', {
            templateUrl: 'views/customers/customers.html',
            controller: 'customersController',
            resolve: {
                customers: function (customersFactory) {
                    return customersFactory.getCustomers();
                }
            }
        })
    });

    app.controller("customersController", function ($scope, customers, customersFactory) {
        $scope.customers = customers;

        //customersFactory.getCustomers().then(function (customers) {
        //  //  $scope.customers.removeAll();
        //    //$scope.customers.push({customerName:'Mark'});
        //});

        $scope.deleteCustomer = function (id) {
            var Delete;

            var r = confirm("Delete Customer ?");
            if (r == true) {
                customersFactory.deleteCustomer(id).then(function () {

                        $scope.customers.splice($scope.customers.filter(function(c){ return c._id === id}))

                });
            }
        };
    });
    app.controller("addCustomerController", function($scope, $location, customersFactory) {

        $scope.insertCustomer = function () {
            customersFactory.insertCustomer($scope.newCustomer)
                .then(function() {
                    $location.path('/customers');
                });
            $scope.newCustomer = {}
        };

    });
    app.controller('editCustomerController', function ($scope, $routeParams, customersFactory) {
        $scope.customer = {};

        //Grab customerID off of the route
        var customerID = ($routeParams.customerID) ? parseInt($routeParams.customerID) : 0;
        if (customerID > 0) {
            $scope.customer = customersFactory.getCustomer(customerID);
        }

    });

})();

