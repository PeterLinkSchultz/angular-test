var angular = require('angular');
var list = require('./list.js').create();

var block = require('./block');
var Simple = block.Simple;
var Extend = block.Extend;

angular.module('list').factory('listService', function() {
    return list;
});