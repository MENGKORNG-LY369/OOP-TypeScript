import { Customer } from "./Store/Customer";
import { Feedback } from "./Store/Feedback";
import { Product } from "./Store/Product";
import { Store } from "./Store/Store";

// PNC storage
const pncStorage = new Store("PNC Storage", 7, 12);
const customer1 = new Customer("Mengkorng", "Ly");
const product1 = new Product("Yoyo", 20, 100);
const product2 = new Product("Book", 10, 100);

const feedback1 = new Feedback("Good product", 100);
const feedback2 = new Feedback("Not good enough!", 50);


feedback1.addCustomer(customer1);
feedback2.addCustomer(customer1);

product1.addFeedback(feedback1);
product2.addFeedback(feedback2);

pncStorage.addProduct(product1);
pncStorage.addProduct(product2);

pncStorage.addCustomer(customer1);

// console.log(pncStorage.getFeedbackCOntaining("Not good enough!"));


import { House, Room, Windows } from "./HouseRoom/HouseRoom";
//Q1.create the House ah jo
const profession = new House();
profession.bedroom.mainWindows;
//Q2 Print the window color
console.log(profession);


// create the House name ah jo
const ahJo = new House();
ahJo.livingRoom.mainWindows[0];

// Complete this code to get the color of the first window  of the living room
console.log(ahJo);
