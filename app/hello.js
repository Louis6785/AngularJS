var App = angular.module("myApp",[]);

App.controller("HelloController",function($scope) {
    $scope.greeting = { text: "Hello" };
});