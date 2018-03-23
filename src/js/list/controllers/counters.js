module.exports = function ($scope, listService) {
    var counters = listService.getCounters();
    $scope.counters = counters;
};;