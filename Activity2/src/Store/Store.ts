import { Customer } from "./Customer";
import { Feedback } from "./Feedback";
import { Product } from "./Product";

export class Store {
    constructor
    (
        public name: string,
        public opening: number,
        public closing: number,
        public product: Product[] = [],
        public customer: Customer[] = []
    ) 
    {
        this.name = name;
        this.opening = opening;
        this.closing = closing;
    }

    addCustomer(customer: Customer) {
        this.customer.push(customer);
    }

    addProduct(product: Product) {
        this.product.push(product);
    }

    getProductLessThan(price: number): Product[] {
        const product = this.product.filter(pro => pro.price > price);
        return product;
    }

    getFeedbackCOntaining(keyword: string) {
        const product =  this.product.filter(pro => pro.getFeedback(keyword));
        return product;
    }
}
