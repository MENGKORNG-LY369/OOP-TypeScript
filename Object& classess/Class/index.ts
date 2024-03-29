
class BankAcc {
    balance: number;
    name: string;
    
    // special property "Constructor" used to initialize the BankAcc's object with the default constructor
    constructor(balance: number, name: string) {
        this.balance = balance;
        this.name = name;
    }
}

let myAcc = new BankAcc(999, "Mengkorng");
console.log(myAcc);
