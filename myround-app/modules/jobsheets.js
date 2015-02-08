(function () {
    var app = angular.module("jobsheets", function (customersFactory) {

    });
    //Jobsheets DB
    var jobsheetsDb = new PouchDB('jobsheets');

    //Jobsheets Factory
    var factory = {};
    app.factory('jobsheetsFactory', function () {

        return factory;
    });

    //Jobsheets Controller
    app.controller("jobsheetsController", function($scope) {

    });

}());
