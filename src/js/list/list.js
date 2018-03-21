var List = (function() {
    
    var temp = {
        prototype: {}
    };
    temp.prototype.init = function() {
        this.items = [];
    }
    temp.prototype.addItem = function(item) {
        console.log(item);
        this.items.push(item);
    };
    temp.prototype.removeItem = function(id) {
        var index = this.items.findIndex( function(item, index) {
            return ( item.id == id );
        });
        this.items.splice(index,1);
    };
    temp.prototype.getItems = function() {
        return this.items;
    };
    temp.create = function() {
        var obj = Object.create(temp.prototype);
        obj.init();
        return obj;
    };
    return temp;
})();

module.exports = List;