"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer(name, email, age, phone, address) {
        if (address === void 0) { address = []; }
        this.name = name;
        this.email = email;
        this.age = age;
        this.phone = phone;
        this.address = address;
        this.name = name;
        this.email = email;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
    Customer.prototype.setAddress = function (address) {
        this.address.push(address);
    };
    return Customer;
}());
exports.default = Customer;
