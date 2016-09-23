var app = angular.module("myApp",[]);

app.controller("ShoppingController",function($scope,$http) {
    $http.get("/products").success(function(data, status, headers, config) {
        $scope.items = data;
    });
});