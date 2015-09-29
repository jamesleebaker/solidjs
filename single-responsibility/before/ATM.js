class ATM {
  constructor() {
    // SRP VIOLATION #1 - Should an ATM directly manage its denominations and transactions?
    // What if we add new denominations in the future?
    //  NOTE: Also an OCP violation.
    this.denominations = [100, 50, 20, 5, 1];
    this.billSize = this.denominations[0];
  }

  // SRP VIOLATION #2
  // THe ATM now has two reasons to change:
  // - withdraw/deposit
  // - Managing stacks of bills
  setNextStack() {
    this.billSize = this.denominations[this.denominations.indexOf(this.billSize) + 1];
  }

  // SRP VIOLATION #3 (Possible)
  // Third reason for change
  // - Presentation layer for ejecting money
  // What if this text needs to change or we no longer need to console.log?
  _ejectMoney(numOfBills) {
    console.log(`${numOfBills} $${this.billSize} bill(s) has/have been spit out`);
  }

  withdraw(amount) {
    const numOfBills = Math.floor(amount / this.billSize);

    if (numOfBills > 0) {
        this._ejectMoney(numOfBills);
        amount = amount - (this.billSize * numOfBills);
    }

    // If there is any money left to withdraw and if we have
    // another stack in the line, pass the request on
    if(amount > 0) {
      this.setNextStack();
    }
  }
}
