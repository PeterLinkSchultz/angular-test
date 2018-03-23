var List = (function () {

    var temp = {
        prototype: {}
    };
    temp.prototype.init = function () {
        this.items = [];
        this.counters = {
            active: 0,
            green: 0,
            red: 0,
            all: 0
        };
    }
    temp.prototype.addItem = function (item) {
        this.items.push(item);
        this.changeCounters();
    };
    temp.prototype.removeItem = function (id) {
        var index = this.items.findIndex(function (item, index) {
            return (item.id == id);
        });
        this.items.splice(index, 1);
        this.changeCounters();
    };
    temp.prototype.setActiveItem = function (id) {
        var item = this.items.find(function (item, index) {
            return (item.id == id);
        });
        item.changeActive();
        this.changeCounters();
    };
    temp.prototype.getCounters = function () {
        return this.counters;
    };
    temp.prototype.changeCounters = function (res) {
        this.counters.active = this.filterActive().items.length;
        this.counters.red = this.filterStatus(false).items.length;
        this.counters.green = this.filterStatus(true).items.length;
        this.counters.all = this.getItems().length;
    };
    temp.prototype.setStatusItem = function (id) {
        var item = this.items.find(function (item, index) {
            return (item.id == id);
        });
        var res = item.changeStatus();
        this.changeCounters(res);
    };
    temp.prototype.getItems = function () {
        return this.items;
    };
    temp.prototype.filter = function (filter) {
        return {
            items: this.items.filter(filter)
        }
    };
    temp.prototype.filterActive = function () {
        return this.filter(function (item) {
            return item.getActive();
        });
    };
    temp.prototype.filterStatus = function (type) {
        return this.filter.call(this.filterActive(), function (item) {
            if (typeof item.getStatus == 'function') {
                return item.getStatus() == type;
            } else {
                return false;
            }
        });
    };
    temp.prototype.counter = function () {
        return this.items.length;
    };
    temp.create = function () {
        var obj = Object.create(temp.prototype);
        obj.init();
        return obj;
    };
    return temp;
})();

module.exports = List;