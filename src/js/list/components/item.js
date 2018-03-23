module.exports = {
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
}