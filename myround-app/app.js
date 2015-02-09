(function(){

    var app = angular.module("myRound", ['ngRoute', 'ui.bootstrap', 'ui.grid', 'customers']);

    app.config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'templates/dashboard.html',
                controller: 'dashboardController'
            })
            .when('/customers', {
                templateUrl: 'templates/customers/customers.html',
                controller: 'customersController',
                resolve: {
                    customers: function (customersFactory) {
                        return customersFactory.getCustomers();
                    }
                }
            })
            .when('/addCustomer', {
                templateUrl: 'templates/customers/addCustomer.html',
                controller: 'addCustomerController'
            })
            .when('/editCustomer', {
                templateUrl: 'templates/customers/editCustomer.html',
                controller: 'editCustomerController'
            })
            .when('/todo',{
                templateUrl: 'templates/todo.html',
                controller: 'todoController'
            })
            .when('/rounds',{
                templateUrl: 'templates/rounds.html',
                controller: 'roundsController'
            })
            .when('/debts',{
                templateUrl: 'templates/debts.html',
                controller: 'debtsController'
          })

    });

}());

