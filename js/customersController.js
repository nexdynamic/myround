/**
 * Created by Jack on 08/10/2014.
 */
(function(){
    var app = angular.module("myRound");

    var customersController = function($scope){
        $scope.customerData = [
            {
                "fullName": "Jack Davies",
                "city": "Newent",
                "street": "Ledbury Road",
                "houseName": "Open view",
                "price": 20.00

            },
            {
                "fullName": "Janet Manning",
                "city": "Ross-on-wye",
                "street": "Upton Bishop",
                "houseName": "Underwood",
                "price": 15.00
            },
            {
                "fullName": "Ruth Harkins",
                "city": "Ledbury",
                "street": "Viking Way",
                "houseName": "10",
                "price": 7.00
            }

        ];

    };
    app.controller("customersController", customersController);
}());
