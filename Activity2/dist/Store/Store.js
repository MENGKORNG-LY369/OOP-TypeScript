"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
var Store = /** @class */ (function () {
    function Store(name, opening, closing, product, customer) {
        if (product === void 0) { product = []; }
        if (customer === void 0) { customer = []; }
        this.name = name;
        this.opening = opening;
        this.closing = closing;
        this.product = product;
        this.customer = customer;
        this.name = name;
        this.opening = opening;
        this.closing = closing;
    }
    Store.prototype.addCustomer = function (customer) {
        this.customer.push(customer);
    };
    Store.prototype.addProduct = function (product) {
        this.product.push(product);
    };
    Store.prototype.getProductLessThan = function (price) {
        var product = this.product.filter(function (pro) { return pro.price > price; });
        return product;
    };
    Store.prototype.getFeedbackCOntaining = function (keyword) {
        var product = this.product.filter(function (pro) { return pro.getFeedback(keyword); });
        return product;
    };
    return Store;
}());
exports.Store = Store;
