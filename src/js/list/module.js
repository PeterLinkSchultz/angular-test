var angular = require('angular');

var Item = require('./components/item');
var List = require('./components/list');
var Confirm = require('./components/confirmer');
var Counters = require('./components/counters');
var Add = require('./components/addbutton');
var ListController = require('./controllers/list');
var ListService = require('./service/list.service');
var CountersController = require('./controllers/counters');
var ItemController = require('./controllers/item');

angular.module('list', [])
.component('listItems', List)
.component('listItem', Item)
.component('listConfirm', Confirm)
.component('listAdd', Add)
.component('listCounters', Counters)
.factory('listService', ListService)
.controller('listController',['$scope', 'listService', ListController])
.controller('countersController',['$scope', 'listService', CountersController])
.controller('itemController',['$scope', 'listService', ItemController]);