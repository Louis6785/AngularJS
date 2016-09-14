var App = angular.module("myApp",[]);

App.controller("StartUpController",function($scope) {
    $scope.funding = { startingEstimate: 0 };
    $scope.computeNeeded = function() {
        $scope.funding.needed = $scope.funding.startingEstimate * 10;
    };
});