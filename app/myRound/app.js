(function(){

    var app = angular.module("myRound", ['ngRoute', 'ui.bootstrap', 'customers']);

    app.config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'views/dashboard/dashboard.html',
                controller: 'MainController'
            })
            //.when('/customers',{
            //    templateUrl: 'views/customers/customers.html',
            //    controller: 'customersController',
            //    resolve: customersFactory.getCustomers
            //})
            .when('/addCustomer', {
                templateUrl: 'views/customers/addCustomer.html',
                controller: 'addCustomerController'
            })
            .when('/editCustomer', {
                templateUrl: 'views/customers/editCustomer.html',
                controller: 'editCustomerController'
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

