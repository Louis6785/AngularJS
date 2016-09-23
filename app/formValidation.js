var app = angular.module("myApp",[]);

app.controller("AddUserController", function($scope) {
    $scope.message = "";
    $scope.addUser = function() {
        $scope.message = "Thanks, " + $scope.user.first + ", we added you!";
    };
});