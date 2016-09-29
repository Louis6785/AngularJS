var app = angular.module("calculatorApp",[]);

app.controller("CalculatorController", function($scope) {
    $scope.z = 0;
    $scope.sum = function() {
        $scope.z = $scope.x + $scope.y;
    };
});