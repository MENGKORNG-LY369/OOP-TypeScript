var BankAcc = /** @class */ (function () {
    // special property "Constructor" used to initialize the BankAcc's object with the default constructor
    function BankAcc(balance, name) {
        console.log(this);
        this.balance = balance;
        this.name = name;
    }
    return BankAcc;
}());
var myAcc = new BankAcc(999, "Mengkorng");
console.log(myAcc);
