module.exports = function ($scope, $timeout, listService) {
    var clicks = 0,
        pause = false;
    $scope.changeItem = function (info) {
        if (info.ext) {
            clicks++;
            if (clicks === 1) {
                $timeout(function(){
                }, 200).then(function(){
                    if ( !pause ) {
                        listService.setActiveItem(info.id);
                        clicks = 0;
                    } else
                        pause = false;
                });
            } else {
                pause = true;
                listService.setStatusItem(info.id);
                clicks = 0;
            }
        } else {
            $timeout(function(){
            }, 200).then(function() {
                listService.setActiveItem(info.id);
            });
        }
    };
};