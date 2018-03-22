var angular = require('angular');
angular.module('list', []);

require('./list.service');
require('./item.component');
require('./confirmer.component');
var list = require('./list.js').create();

var block = require('./block');
var Simple = block.Simple;
var Extend = block.Extend;

angular.module('list')
    .controller('listController', ["$scope", "listService", function ($scope, listService) {
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
            //listService.filterStatus(false);
        };
    }])
    .component("listItems", {
        template: "<div ng-repeat=\"item in $ctrl.items\">" +
            "<list-item info=\"item\"" +
            "on-delete=\"$ctrl.remove(id, confirm)\" " +
            "</list-item>" +
            //"<list-item-ext ng-if=\"item.ext\" on-delete=\"$ctrl.remove(id)\" info=\"item\"></list-item>" +
            "<div>",
        //    "<list-item ng-repeat=\"item in $ctrl.items \" on-delete=\"$ctrl.remove(id)\" info=\"item\"></list-item>",
        bindings: {
            items: "=",
            onRemove: "&"
        },
        controller: function () {
            var _this = this;
            _this.remove = function (id, confirm) {
                _this.onRemove({ id: id, confirm: confirm });
            };
            _this.active = function (id) {
                _this.onActive({ id: id });
            };
        }
    })
    .component('listAdd', {
        template: "<a href='#' ng-click=\"$ctrl.add('s')\">add item</a><br/><a href='#' ng-click=\"$ctrl.add('e')\">add ext item</a>",
        bindings: {
            onAdd: "&"
        },
        controller: function () {
            var _this = this;
            _this.add = function (type) {
                _this.onAdd({ type: type });
            };
        }
    });