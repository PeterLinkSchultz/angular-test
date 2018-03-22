var List = (function () {

    var temp = {
        prototype: {}
    };
    temp.prototype.init = function () {
        this.items = [];
        this.active = 0;
        this.green = 0;
        this.red = 0;
    }
    temp.prototype.addItem = function (item) {
        this.items.push(item);
    };
    temp.prototype.removeItem = function (id) {
        var index = this.items.findIndex(function (item, index) {
            return (item.id == id);
        });
        this.items.splice(index, 1);
    };
    temp.prototype.activeItem = function (id) {
        var item = this.items.find(function (item, index) {
            return (item.id == id);
        });
        item.changeActive();
        if ( item.getActive() )       
            this.active++;
        else
            this.active--;
    };
    temp.prototype.statusItem = function (id) {
        var item = this.items.find(function (item, index) {
            return (item.id == id);
        });
        item.changeStatus();
        if ( item.getActive() ) {

        } 
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
        var _items = this.filter(function (item) {
            return item.getActive();
        });
        return {
            items: _items.items,
            counter: function() { return _items.items.length }
        }
    };
    temp.prototype.filterStatus = function (type) {
        this.filter.call(this.filterActive(), function(item) {
            if ( typeof item.getStatus == 'function' ) {
                return item.getStatus() == type;
            } else {
                return false;
            }
        });
    };
    temp.prototype.counter = function() {
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