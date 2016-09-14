var App = angular.module("myApp",[]);

App.controller("HelloController",function($scope) {
    var someText = {};
    someText.message = "You have started your joumey.";
    $scope.someText = someText;
    $scope.greeting = { text: "Hello" };
});