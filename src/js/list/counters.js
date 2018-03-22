var angular = require('angular');

//require('./list.service');
angular.module('list').controller('listCounters', ['$scope', 'listService', function ($scope, listService) {
     //listService.filterActive().counter();
    //$scope.green = listService.filterStatus(true);
    var items = listService.getItems();
    var counters = listService.getCounters();
    $scope.counters = counters;
/*    $scope.active = items.filter( function(item) {

    });*/
    //$scope.red = listService.filterStatus(false).counter();
    
}]).component('listCounter', {
    template: "<div>"+
        "<p>red: {{ $ctrl.counters.red }}</p>"+
        "<p>green: {{ $ctrl.counters.green }}</p>"+
        "<p>active: {{ $ctrl.counters.active }}</p>"+
        "<p>all: {{ $ctrl.counters.all }}</p></div>",
    bindings: {
        counters: '='
    },
    controller: function(){
        console.log(this);
    }
});