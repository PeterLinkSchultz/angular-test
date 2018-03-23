/*var angular = require('angular');

angular.module('list')
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
    });*/
module.exports = {
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
}