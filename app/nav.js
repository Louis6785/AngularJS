var App = angular.module("myApp",[]);

App.controller("NavController",function($scope) {
    $scope.doSomething = doA;
});

App.controller("ContentAreaController",function($scope) {
    $scope.doSomething = doB;
});