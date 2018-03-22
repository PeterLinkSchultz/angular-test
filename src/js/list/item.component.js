var angular = require('angular');

angular.module('list')
    .component('listItemE', {
        bindings: {
            info: '=',
            onDelete: "&"
        },
        template: "<div>" +
            "<p><b>id:</b>{{ $ctrl.info.id }}</p>" +
            "<p><b>content:</b>{{ $ctrl.info.content }}</p>" +
            "<a href='#' ng-click=\"$ctrl.remove()\">delete</a>" +
            "</div>",
        controller: function () {
            var _this = this;
            _this.remove = function () {
                _this.onDelete({ id: _this.info.id, confirm: _this.info.ext });
            };
        }
    })
    .component('listItem', {
        bindings: {
            info: '=',
            onDelete: "&"
        },
        template:
            "<div ng-controller=\"itemController\" ng-click=\"changeItem($ctrl.info)\">" +
            "<p><b>id:</b>{{ $ctrl.info.id }}</p>" +
            "<p><b>content:</b>{{ $ctrl.info.content }}</p>" +
            "<a href='#' ng-click=\"$ctrl.remove()\">delete</a>" +
            "</div>",
        controller: function () {
            var _this = this;
            _this.remove = function () {
                _this.onDelete({ id: _this.info.id, confirm: _this.info.ext });
            };
        }
    })
    .controller('itemController', ['$scope', 'listService', function ($scope, listService) {
        var clicks = 0,
            timeout;
        $scope.changeItem = function (info) {
            if (info.ext) {
                clicks++;
                if (clicks == 1) {
                    timeout = setTimeout(function () {
                        clicks = 0;
                        listService.activeItem(info.id);
                        console.log('click');
                    }, 250);
                } else {
                    console.log('dbclick');
                    clearTimeout(timeout);
                    listService.statusItem(info.id);
                    clicks = 0;
                }
            } else {
                listService.activeItem(info.id);
            }
        };
    }]);
    