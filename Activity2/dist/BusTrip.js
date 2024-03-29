"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Bus trip/Customer");
var Trip_1 = require("./Bus trip/Trip");
var Address_1 = require("./Bus trip/Address");
var DateTime_1 = require("./Bus trip/DateTime");
// Customer 1
var customer1 = new Customer_1.default("Mengkorg", "mengkorng.ly@gmail.com", 19, "2345452384");
var customerAddress = new Address_1.default("Kampong cham", "123-2323");
customer1.setAddress(customerAddress);
// Trip 1
var trip1 = new Trip_1.default("Honda");
var departure = new Address_1.default("Phnom penh", "4323-23");
var arrival = new Address_1.default("Kampong cham", "332-234");
var datetime = new DateTime_1.default("7 am", "6 pm");
trip1.setAddress(departure, arrival);
trip1.setCustomer(customer1);
trip1.setDate(datetime);
console.log(trip1);
exports.default = trip1;
