(function () {
    var app = angular.module("rounds", function (customersFactory) {

    });
    //Jobsheets DB
    var roundsDb = new PouchDB('rounds');

    //Jobsheets Factory
    var factory = {};
    app.factory('roundsFactory', function () {

        return factory;
    });

    //Jobsheets Controller
    app.controller("roundsController", function($scope) {

    });

}());
