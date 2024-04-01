"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, price, quantity, feedback) {
        if (feedback === void 0) { feedback = []; }
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.feedback = feedback;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    Product.prototype.addFeedback = function (feedback) {
        this.feedback.push(feedback);
    };
    Product.prototype.getFeedback = function (keyword) {
        return this.feedback.filter(function (feedback) { return feedback.comment == keyword; });
    };
    return Product;
}());
exports.Product = Product;
