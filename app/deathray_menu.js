var App = angular.module("myApp",[]);

App.controller("DeathrayMenuController",function($scope) {
    $scope.isDisabled = false;
    $scope.stun = function() {
        $scope.isDisabled = "true";
    };

    $scope.menuState = { "show" : false };
    $scope.toggleMenu = function() {
        $scope.menuState.show = !$scope.menuState.show;
    }
});