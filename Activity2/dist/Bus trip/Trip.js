"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Trip = /** @class */ (function () {
    function Trip(bus, customer, from, to, date) {
        if (customer === void 0) { customer = []; }
        if (from === void 0) { from = []; }
        if (to === void 0) { to = []; }
        if (date === void 0) { date = []; }
        this.bus = bus;
        this.customer = customer;
        this.from = from;
        this.to = to;
        this.date = date;
        this.bus = bus;
        this.from = from;
        this.to = to;
        this.date = date;
    }
    Trip.prototype.setAddress = function (from, to) {
        this.from.push(from);
        this.to.push(to);
    };
    Trip.prototype.setCustomer = function (customer) {
        this.customer.push(customer);
    };
    Trip.prototype.setDate = function (date) {
        this.date.push(date);
    };
    return Trip;
}());
exports.default = Trip;
