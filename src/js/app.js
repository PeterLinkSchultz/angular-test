var angular = require('angular');


require('./list/list.component.js');
require('./list/counters');
//console.log(block.Simple.create().getInfo());
var app = angular.module('app', [
    "list"
]);