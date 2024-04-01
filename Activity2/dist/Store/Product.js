"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, price, store) {
        if (store === void 0) { store = []; }
        this.name = name;
        this.price = price;
        this.store = store;
        this.name = name;
        this.price = price;
        this.store = store;
    }
    Product.prototype.setStore = function (store) {
        this.store.push(store);
    };
    return Product;
}());
exports.Product = Product;
