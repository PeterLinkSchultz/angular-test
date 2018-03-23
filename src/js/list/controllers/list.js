var block = require('../service/block');
var Simple = block.Simple;
var Extend = block.Extend;

module.exports = function ($scope, listService) {
    $scope.items = listService.getItems();
    $scope.removeItem = function (id, confirm) {
        if (confirm) {
            $scope.confirm = true;
            $scope.resolve = function () {
                listService.removeItem(id);
                $scope.confirm = false;
            };
            $scope.reject = function () {
                $scope.confirm = false;
            };
        } else {
            listService.removeItem(id);
        }
    };
    $scope.addItem = function (type) {
        if (type === 's')
            listService.addItem(Simple.create());
        else
            listService.addItem(Extend.create());
    };
};