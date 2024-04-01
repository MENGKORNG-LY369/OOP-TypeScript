import { Customer } from "./Customer";

export class Feedback {
    constructor(
        public comment: string,
        public evaluation: number,
        public customer: Customer[] = []
    ) {
        this.comment = comment;
        this.evaluation = evaluation;
        this.customer = customer;
    }

    addCustomer(customer: Customer) {
        this.customer.push(customer);
    }
}