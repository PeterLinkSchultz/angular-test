module.exports = function ($scope, listService) {
    var clicks = 0,
        timeout;
    $scope.changeItem = function (info) {
        if (info.ext) {
            clicks++;
            if (clicks == 1) {
                timeout = setTimeout(function () {
                    clicks = 0;
                    listService.setActiveItem(info.id);
                }, 250);
            } else {
                clearTimeout(timeout);
                listService.setStatusItem(info.id);
                clicks = 0;
            }
        } else {
            listService.setActiveItem(info.id);
        }
    };
};