function createBankAccount(owner, balance) {
    let _balance = balance;
    return {
        deposit(amount) {
            _balance += amount;
            console.log(`${owner} deposited $${amount}. New balance: $${_balance}`);
        },
        withdraw(amount) {
            if (amount <= _balance) {
                _balance -= amount;
                console.log(`${owner} withdrew $${amount}. Remaining balance: $${_balance}`);
            } else {
                console.log("Insufficient funds!");
            }
        },
        getBalance() {
            return _balance;
        }
    };
}
export default createBankAccount;