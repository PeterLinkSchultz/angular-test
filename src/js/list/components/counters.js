module.exports = {
    template: "<div>" +
        "<p>red: {{ $ctrl.counters.red }}</p>" +
        "<p>green: {{ $ctrl.counters.green }}</p>" +
        "<p>active: {{ $ctrl.counters.active }}</p>" +
        "<p>all: {{ $ctrl.counters.all }}</p></div>",
    bindings: {
        counters: '='
    },
    controller: function () {
        console.log(this);
    }
}