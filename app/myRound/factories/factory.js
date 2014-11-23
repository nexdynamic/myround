(function () {
    var app = angular.module('myRound');

    app.factory('customerFactory', function () {

        var customers = [

            {id: 0, customerName: 'Jack Davies', city: 'Newent', street: 'Ledbury Road', houseName: 'Openview', price: '£20.00'},
            {id: 1, customerName: 'Jack Davies', city: 'Newent', street: 'Ledbury Road', houseName: 'Openview', price: '£20.00'},
            {id: 2, customerName: 'Jack Davies', city: 'Newent', street: 'Ledbury Road', houseName: 'Openview', price: '£20.00'},
            {id: 3, customerName: 'Jack Davies', city: 'Newent', street: 'Ledbury Road', houseName: 'Openview', price: '£20.00'},

        ];


        var factory = {};
        factory.getCustomers = function () {
            return customers;
        };

        factory.getCustomer = function (id) {
            for (var i = 0; i < customers.length; i++) {
                if (customers[i].id === id) {
                    return customers[i];
                }
            }
            return null;
        };
        factory.postCustomer = function (customer) {

            customers.push(customer)
        };

        return factory;
    });

}());
