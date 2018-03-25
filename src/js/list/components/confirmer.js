module.exports = {
    template: "<div class=\"popup-buttons\"><h2>Confirm remove</h2><div class=\"container-flex\">"+
    "<a class=\"button icon icon-ok\" href='#' ng-click=\"$ctrl.resolve()\"></a>"+
    "<a class=\"button icon icon-cancel\" href=\"#\" ng-click=\"$ctrl.reject()\"></a></div></div>",
    bindings: {
        onResolve: "&",
        onReject: "&"
    },
    controller: function () {
        this.resolve = function () {
            this.onResolve();
        };
        this.reject = function () {
            this.onReject();
        };
    }
};