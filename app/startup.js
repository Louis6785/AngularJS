var App = angular.module("myApp",[]);

App.controller("StartUpController",function($scope) {
    $scope.computeNeeded = function() {
        $scope.needed = $scope.startingEstimate * 10;
    };

    $scope.requestFunding = function() {
        window.alert("Sorry, please get more customers first.");
    };

    $scope.reset = function() {
        $scope.startingEstimate = 0;
    };
});