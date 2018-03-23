/*var angular = require('angular');

angular.module('list')
    .component('listConfirm', {
        template: "<div><a href='#' ng-click=\"$ctrl.resolve()\">Yes</a><a href=\"#\" ng-click=\"$ctrl.reject()\">No</a></div>",
        bindings: {
            onResolve: "&",
            onReject: "&"
        },
        controller: function () {
            this.resolve = function () {
                this.onResolve();
            }
            this.reject = function () {
                this.onReject();
            }
        }
    });*/
module.exports = {
    template: "<div><a href='#' ng-click=\"$ctrl.resolve()\">Yes</a><a href=\"#\" ng-click=\"$ctrl.reject()\">No</a></div>",
    bindings: {
        onResolve: "&",
        onReject: "&"
    },
    controller: function () {
        this.resolve = function () {
            this.onResolve();
        }
        this.reject = function () {
            this.onReject();
        }
    }
}