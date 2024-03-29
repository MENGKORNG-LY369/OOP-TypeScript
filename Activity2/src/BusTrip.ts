import Customer from "./Bus trip/Customer";
import  Trip from "./Bus trip/Trip";
import Address from "./Bus trip/Address";
import DateTime from "./Bus trip/DateTime";

// Customer 1
const customer1 = new Customer("Mengkorg", "mengkorng.ly@gmail.com", 19, "2345452384");
const customerAddress = new Address("Kampong cham", "123-2323");
customer1.setAddress(customerAddress);


// Trip 1
const trip1 = new Trip("Honda");
const departure = new Address("Phnom penh", "4323-23");
const arrival = new Address("Kampong cham", "332-234");
const datetime = new DateTime("7 am", "6 pm");

trip1.setAddress(departure, arrival);
trip1.setCustomer(customer1);
trip1.setDate(datetime);

console.log(trip1);
export default trip1;