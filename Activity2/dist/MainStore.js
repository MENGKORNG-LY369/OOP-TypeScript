"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
var Customer_1 = require("./Store/Customer");
var Store = /** @class */ (function () {
    function Store(name, customer) {
        if (customer === void 0) { customer = []; }
        this.name = name;
        this.customer = customer;
        this.name = name;
    }
    Store.prototype.getCustomer = function (customer) {
        this.customer.push(customer);
    };
    return Store;
}());
exports.Store = Store;
var STORE1 = new Store("PNC Storage");
var CUSTOMER1 = new Customer_1.Customer("Mengkorng", "Ly");
STORE1.getCustomer(CUSTOMER1);
console.log(STORE1);
