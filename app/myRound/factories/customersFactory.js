(function () {
    var app = angular.module('myRound');

    app.factory('customerFactory', function () {

        var customers = [

            {id: 1, customerName: 'Jack Davies', city: 'Newent', street: 'Ledbury Road', houseName: 'Openview', price: '£20.00'},
            {id: 2, customerName: 'Janet Manning', city: 'Ross-On-Wye', street: 'Upton Bishop', houseName: 'Underwood', price: '£16.00'},
            {id: 3, customerName: 'Jack Davies', city: 'Newent', street: 'Ledbury Road', houseName: 'Openview', price: '£20.00'},
            {id: 4, customerName: 'Jack Davies', city: 'Newent', street: 'Ledbury Road', houseName: 'Openview', price: '£20.00'}
        ];


        var factory = {};

        factory.getCustomers = function () {
            return customers;
        };

        factory.insertCustomer = function (customerName, city, street, houseName, price) {
            var topID = customers.length + 1;
            customers.push({
                id: topID,
                customerName: customerName,
                city: city,
                street: street,
                houseName: houseName,
                price: price
            });
        };

        factory.deleteCustomer = function (id) {
            for (var i = customers.length - 1; i >= 0; i--) {
                if (customers[i].id === id) {
                    customers.splice(i, 1);
                    break;
                }
            }
        };

        factory.getCustomer = function (id) {
            for (var i = 0; i < customers.length; i++) {
                if (customers[i].id === id) {
                    return customers[i];
                }
            }
            return null;
        };


        return factory;
    });


}());
