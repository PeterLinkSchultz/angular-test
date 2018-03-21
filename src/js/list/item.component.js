var angular = require('angular');

angular.module('list').component('listItem', {
    bindings: {
        info: '=',
        onDelete: "&",
        confirmation: "="
    },
    template: "<div>"+
        "<p><b>id:</b>{{ $ctrl.info.id }}</p>"+
        "<p><b>content:</b>{{ $ctrl.info.content }}</p>"+
        "<a href='#' ng-click=\"$ctrl.remove()\">delete</a>"+
        "<div ng-if=\"$ctrl.toRemove\"><confirm reject=/></confirm><a href='#' ng-click=\"$ctrl.confirm()\">Yes</a></div>"+
        "</div>",
    controller: function() {
        //console.log(this);
        var _this = this;
        _this.remove = function() {
            if ( _this.confirmation )
                _this.toRemove = true;
            //this.onDelete();
        };
        _this.confirm = function() {
            _this.onDelete();
        }
    }
});