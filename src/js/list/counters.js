var angular = require('angular');

//require('./list.service');
angular.module('list').controller('listCounters', ['$scope', 'listService', function ($scope, listService) {
    $scope.active = listService.filterActive().counter();
    //$scope.green = listService.filterStatus(true);
    console.log( $scope.active )
    //$scope.red = listService.filterStatus(false).counter();
    console.log( $scope.red )
    $scope.all = listService.getItems();
}]).component('listCounter', {
    template: "<div></div>",
    bindings: {
        data: '=',
        name: '='
    },
    controller: function(){

    }
});