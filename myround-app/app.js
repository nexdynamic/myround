(function(){

    var app = angular.module("myRound", ['ngRoute', 'ui.bootstrap', 'customers']);

    app.config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'templates/dashboard.html',
                controller: 'dashboardController'
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

            .when('/jobsheets',{
                templateUrl: 'templates/jobsheets.html',
                controller: 'jobsheetsController'

            })

            .when('/debts',{
                templateUrl: 'templates/debts.html',
                controller: 'debtsController'

          })


    });

}());

