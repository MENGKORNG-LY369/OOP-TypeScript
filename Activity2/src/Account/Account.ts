class BackAccount {
    constructor(
        private name: string,
        private balance: number = 0
    ) {
        this.name = name;
    }

    debit(amount: number) {
        if (this.balance - amount >= 0 && amount > 0) {
            this.balance - amount;
        }
    }

    deposit(amount: number) {
        if (amount > 0) {
            this.balance += amount;
        }
    }

}

const ronnanAccount = new BackAccount("Ronnan", 500);
ronnanAccount.deposit(200)
ronnanAccount.debit(100);

console.log(ronnanAccount);
