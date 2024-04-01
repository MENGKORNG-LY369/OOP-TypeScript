"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feedback = void 0;
var Feedback = /** @class */ (function () {
    function Feedback(comment, evaluation, customer) {
        if (customer === void 0) { customer = []; }
        this.comment = comment;
        this.evaluation = evaluation;
        this.customer = customer;
        this.comment = comment;
        this.evaluation = evaluation;
        this.customer = customer;
    }
    Feedback.prototype.addCustomer = function (customer) {
        this.customer.push(customer);
    };
    return Feedback;
}());
exports.Feedback = Feedback;
