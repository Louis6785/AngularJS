var App = angular.module("myApp",[]);

var album = [
    { name : "Southwest Serenade", duration : "2:34" },
    { name : "Northem Light Waltz", duration : "3:21" },
    { name : "Eastem Tango", duration : "17:45" }
];

App.controller("AlbumController",function($scope) {
    $scope.album = album;
});