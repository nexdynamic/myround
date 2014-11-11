(function(){

    var app = angular.module("myRound", ['ngRoute', 'ui.bootstrap', 'ui.grid']);

    app.config(function($routeProvider){
        $routeProvider

            .when('/', {
                templateUrl: 'pages/dashboard.html',
                controller: 'MainController'
            })

            .when('/customers',{
                templateUrl: 'pages/customers.html',
                controller: 'customersController'
            })

            .when('/todo',{
                templateUrl: 'pages/todo.html',
                controller: 'todoController'
            })

            .when('/jobsheets',{
                templateUrl: 'pages/jobsheets.html',
                controller: 'jobsheetsController'

            })

            .when('/debts',{
                templateUrl: 'pages/debts.html',
                controller: 'debtsController'

            })

            .when('/addCustomer',{
                templateUrl: 'pages/addCustomer.html',
                controller: 'addCustomerController'
            })
    });

}());

