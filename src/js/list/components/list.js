module.exports = {
    template: "<list-item class=\"item\" ng-repeat=\"item in $ctrl.items\"" +
        "info=\"item\"" +
        "on-delete=\"$ctrl.remove(id, confirm)\"></list-item>",
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
};