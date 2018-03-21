var Simple = (function() {
    var temp = {};
    temp.prototype = {};
    temp.prototype.id = 1;
    temp.prototype.init = function(){
        this.active = false;
        this.id = temp.prototype.id++;
        this.content = "DDDDDDDDDDDDD";
    };
    temp.prototype.getInfo = function() {
        return {
            conent: this.content,
            active: this.active
        }
    };
    temp.prototype.getId = function(){
        return this.id
    };
    temp.prototype.toString = function() {
        return this.id;
    };
    temp.create = function() {
        var obj = Object.create(temp.prototype);
        obj.init();
        return obj;
    };
    return temp;
})();

var Extend = (function() {
    var temp = {},
        _proto = Simple.prototype;

    temp.prototype = Object.create(_proto);
    temp.prototype.init = function() {
        var _this = this;
        _this.additional = false;
        _proto.init.apply(_this);
    };
    temp.prototype.change = function() {
        this.additional = this.additional ? false : true;
    };
    temp.prototype.getInfo = function() {
        var _this = this;
        var info = _proto.getInfo.apply(_this);
        info.additional = _this.additional;
        return info;
    };
    temp.create = function() {
        var obj = Object.create(temp.prototype);
        obj.init();
        return obj;
    };
    return temp;
})();

module.exports = {
    Simple,
    Extend
}