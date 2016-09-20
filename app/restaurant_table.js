var App = angular.module("myApp",[]);

App.controller("RestaurantTableController",function($scope) {
    $scope.directory = [
        { name : "The Handsome Heifer", cuisine : "BBQ" },
        { name : "Green\'s Green Greens", cuisine : "Salads" },
        { name : "House of Fine Fish", cuisine : "Seafood" }
    ];
    $scope.selectRestaurant = function(row) {
        $scope.selectedRow = row;
    };
    $scope.pictures = "pdf.gif";
    $scope.param = "123";
});