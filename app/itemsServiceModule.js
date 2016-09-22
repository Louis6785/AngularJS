var shoppingModule = angular.module("ShoppingModule",[]);

shoppingModule.controller("ShoppingController",function(Items,$scope) {
    $scope.items = Items.query();
});

shoppingModule.factory("Items",function() {
    var items = {};
    items.query = function() {
        return [
            { title: 'Paint pots', description: 'Pots full of paint', price: 3.95 },
            { title: 'Polka dots', description: 'Dots with polka', price: 2.95 },
            { title: 'Pebbles', description: 'Just little rocks', price: 6.95 }
        ];
    };
    return items;
});