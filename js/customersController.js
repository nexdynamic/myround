(function(){
    var app = angular.module("myRound");

    var customersController = function($scope){

        $scope.customerData = {
            enableSorting: true,
            columnDefs: [
                { field: 'name' },
                { field: 'city' },
                { field: 'street' },
                { field: 'houseName' },
                { field: 'price' }
            ]
        };


        $scope.customerData = [
            {
                "name": "Jack Davies",
                "city": "Newent",
                "street": "Ledbury Road",
                "houseName": "Open view",
                "price": 20.00

            },
            {
                "name": "Janet Manning",
                "city": "Ross-on-wye",
                "street": "Upton Bishop",
                "houseName": "Underwood",
                "price": 15.00
            },
            {
                "name": "Ruth Harkins",
                "city": "Ledbury",
                "street": "Viking Way",
                "houseName": "10",
                "price": 7.00
            }

        ];

    };
    app.controller("customersController", customersController);
}());
