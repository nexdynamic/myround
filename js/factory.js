(function () {
    var app = angular.module('myRound');

    app.factory('customerFactory', function () {

        var customers = [

            {name: 'Jack Davies', city: 'Newent', street: 'Ledbury Road', houseName: 'Openview', price: '£20.00'}

        ];


        var factory = {};
        factory.getCustomers = function () {
            return customers;
        };
        factory.getCustomer = function (customerId) {
            return customers[customerId-1];
        };
        factory.postCustomer = function (customer) {
            customer.id = customers.length + 1;
            customers.push(customer)
        };

        return factory;
    });

}());
