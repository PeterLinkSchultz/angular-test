var angular = require('angular');
var list = require('./list.js').create();

angular.module('list').factory('listService', function () {
    return list;
});