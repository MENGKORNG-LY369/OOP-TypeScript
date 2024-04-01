"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feedback = void 0;
var Feedback = /** @class */ (function () {
    function Feedback(comment, evaluation, customer, product) {
        if (customer === void 0) { customer = []; }
        if (product === void 0) { product = []; }
        this.comment = comment;
        this.evaluation = evaluation;
        this.customer = customer;
        this.product = product;
        this.comment = comment;
        this.evaluation = evaluation;
        this.customer = customer;
        this.product = product;
    }
    Feedback.prototype.setCustomer = function () {
    };
    Feedback.prototype.setProduct = function () {
    };
    return Feedback;
}());
exports.Feedback = Feedback;
