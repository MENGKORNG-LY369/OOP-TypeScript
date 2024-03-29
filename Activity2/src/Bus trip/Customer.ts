import Address from "./Address";

export default class Customer {
    constructor(
        public name: string,
        public email: string,
        public age: number,
        public phone: string,
        public address: Address[] = [],
    ) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }

    setAddress(address: Address) {
        this.address.push(address);
    }
}