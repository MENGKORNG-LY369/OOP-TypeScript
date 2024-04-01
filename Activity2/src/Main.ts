import { Customer } from "./Store/Customer";
import { Feedback } from "./Store/Feedback";
import { Product } from "./Store/Product";
import { Store } from "./Store/Store";

// PNC storage
const pncStorage = new Store("PNC Storage", 7, 12);
const customer1 = new Customer("Mengkorng", "Ly");
const product1 = new Product("Yoyo", 20, 100);
const feedback1 = new Feedback("Good product", 100);

feedback1.addCustomer(customer1);
product1.addFeedback(feedback1);
pncStorage.addProduct(product1);

console.log(pncStorage);
