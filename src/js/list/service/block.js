var Simple = (function () {
    var temp = {};
    temp.prototype = {};
    temp.prototype.id = 1;
    temp.prototype.init = function () {
        this.active = true;
        this.id = temp.prototype.id++;
        this.content = "DDDDDDDDDDDDD";
    };
    temp.prototype.getInfo = function () {
        return {
            conent: this.content,
            active: this.active
        }
    };
    temp.prototype.changeActive = function () {
        var _active = this.active = this.active ? false : true;
        return {
            active: _active
        }
    };
    temp.prototype.getId = function () {
        return this.id
    };
    temp.prototype.toString = function () {
        return this.id;
    };
    temp.prototype.getActive = function () {
        return this.active;
    };
    temp.create = function () {
        var obj = Object.create(temp.prototype);
        obj.init();
        return obj;
    };
    return temp;
})();

var Extend = (function () {
    var temp = {},
        _proto = Simple.prototype;

    temp.prototype = Object.create(_proto);
    temp.prototype.init = function () {
        var _this = this;
        _this.status = false;
        _this.ext = true;
        _proto.init.apply(_this);
    };
    temp.prototype.changeStatus = function () {
        this.status = this.status ? false : true;
    };
    temp.prototype.getInfo = function () {
        var _this = this;
        var info = _proto.getInfo.apply(_this);
        info.additional = _this.additional;
        return info;
    };
    temp.prototype.changeActive = function() {
        var _this = this;
        _proto.changeActive.apply(_this);
    };
    temp.prototype.getStatus = function () {
        return this.status;
    };
    temp.create = function () {
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