(function(){

    var app = angular.module("myRound");
    //Set links to active when clicked//
    app.controller("MainController",  function($scope, $location){
        $scope.isActive = function(route) {
            return route === $location.path();
        }
    });



}());