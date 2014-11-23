(function(){

    var app = angular.module("myRound", ['ngRoute', 'ui.bootstrap']);

    app.config(function($routeProvider){
        $routeProvider

            .when('/', {
                templateUrl: 'views/dashboard/dashboard.html',
                controller: 'MainController'
            })

            .when('/customers',{
                templateUrl: 'views/customers/customers.html',
                controller: 'customersController'
            })

            .when('/customers/customerID:',
            {
                templateUrl: 'views/customers/addCustomer.html',
                controller: 'addCustomerController'
            })
            .when('/addCustomer',{
                templateUrl: 'views/customers/addCustomer.html',
                controller: 'addCustomerController'
            })

            .when('/editCustomer/:customerID',{
                templateUrl: 'views/customers/editCustomer.html',
                controller: 'addCustomerController'
            })

            .when('/todo',{
                templateUrl: 'views/todo/todo.html',
                controller: 'todoController'
            })

            .when('/jobsheets',{
                templateUrl: 'views/jobsheets/jobsheets.html',
                controller: 'jobsheetsController'

            })

            .when('/debts',{
                templateUrl: 'views/debts/debts.html',
                controller: 'debtsController'

            })


    });

}());

