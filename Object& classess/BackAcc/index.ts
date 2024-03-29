type BankAcc = {
    balance: number,
    name: string
}

let acc1 : BankAcc = { balance : 123, name : "mengkorng"};
function debit(acc: BankAcc, valueDollar: number) {
    return acc.balance += valueDollar;
}
console.log(debit(acc1, 100));


let acc2 : BankAcc = { balance : 123, name : "Heron" };
function credit(acc: BankAcc, valueDollar: number) {
    return acc.balance -= valueDollar;
}
console.log(credit(acc2, 100));
