module.exports = {
    template: "<a class=\"button button-add\" href='#' ng-click=\"$ctrl.add('s')\">add item</a>"+
    "<a class=\"button button-add\"  href='#' ng-click=\"$ctrl.add('e')\">add ext item</a>",
    bindings: {
        onAdd: "&"
    },
    controller: function () {
        var _this = this;
        _this.add = function (type) {
            _this.onAdd({ type: type });
        };
    }
};