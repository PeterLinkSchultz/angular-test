var angular = require('angular');
angular.module('list', []);

require('./list.component.service');
require('./item.component');
var list = require('./list.js').create();

var block = require('./block');
var Simple = block.Simple;
var Extend = block.Extend;

angular.module('list')
.component("listComponent", {
    template: "<div ng-controller=\"listController\">"+
            "<list-item ng-repeat=\"item in items \" on-delete=\"removeItem(item.id)\" info=\"item\" on-confirm confirmation=true><div></div></list-item>"+
            "<add on-add=\"addItem()\"></add>"+
        "<div>",
    controller: function (){
    }
})
.controller('listController', ["$scope", "listService", function($scope, listService) {
    $scope.removeItem = function(id) {
        listService.removeItem(id);
    };
    $scope.addItem = function() {
        listService.addItem(Simple.create());
    };
    $scope.items = listService.getItems();
}]).controller("control", ["$scope", "listService", function($scope, listService){
    $scope.addItem = function() {
        listService.addItem(Simple.create());
    }
}])
.component('add', {
    template: "<a href='#' ng-click=\"$ctrl.add()\">add item</a>",
    bindings: {
        onAdd: "&"
    },
    controller: function() {
        this.add = function() {
            this.onAdd();
        };
    }
})
.directive('onConfirm', function(){
    return function(scope, element, attrs) {
        
        console.log(scope);
    }
});