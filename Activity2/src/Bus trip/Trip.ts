import Address from "./Address";
import Customer from "./Customer";
import DateTime from "./DateTime";

export default class Trip {
    constructor(
        public bus: string,
        public customer: Customer[] = [],
        public from: Address[] = [],
        public to: Address[] = [],
        public date: DateTime[] = []
    ) {
        this.bus = bus;
        this.from = from;
        this.to = to;
        this.date = date;
    }

    setAddress(from: Address, to: Address) {
        this.from.push(from);
        this.to.push(to);
    }

    setCustomer(customer: Customer) {
        this.customer.push(customer);
    }

    setDate(date: DateTime) {
        this.date.push(date)
    }
}