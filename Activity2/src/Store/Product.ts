import { Feedback } from "./Feedback";

export class Product {
    constructor(
        public name: string,
        public price: number,
        public quantity: number,
        public feedback: Feedback[] = []
    ) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    addFeedback(feedback: Feedback) {
        this.feedback.push(feedback);
    }
}