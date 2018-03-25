module.exports = {
    bindings: {
        info: '=',
        onDelete: "&"
    },
    template:
        "<div class=\"item-cont {{ $ctrl.info.active ? 'item-active ' : ''}}{{ $ctrl.info.ext ? $ctrl.info.status ? 'item-green' : 'item-red' : ''}}\" ng-controller=\"itemController\" ng-click=\"changeItem($ctrl.info)\">" +
        "<p><b>id:</b>{{ $ctrl.info.id }}</p>" +
        "<p><b>content:</b>{{ $ctrl.info.content }}</p>" +
        "</div>" +
        "<a class=\"button-delete icon icon-delete\" href='#' ng-click=\"$ctrl.remove()\"></a>",
    controller: function () {
        var _this = this;
        _this.remove = function () {
            console.log(this);
              _this.onDelete({ id: _this.info.id, confirm: _this.info.ext });
        };
    }
};