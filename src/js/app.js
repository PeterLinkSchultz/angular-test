var angular = require('angular');


require('./list/list.component.js');
var block = require('./list/block');
var Simple = block.Simple;
var Extend = block.Extend;

//console.log(block.Simple.create().getInfo());
var app = angular.module('app', [
    "list"
]);