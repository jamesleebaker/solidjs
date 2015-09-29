import MoneyStack from './MoneyStack';

class ATM {
  constructor() {
    // SRP VIOLATION #1 - Should an ATM directly manage its denominations and transactions?
    // NOTE: Also an OCP violation.
    let stack100 = new MoneyStack(100);
    let stack50 = new MoneyStack(50);
    let stack20 = new MoneyStack(20);
    let stack10 = new MoneyStack(10);
    let stack5 = new MoneyStack(5);
    let stack1 = new MoneyStack(1);

    stack100.setNextStack(stack50);
    stack50.setNextStack(stack20);
    stack20.setNextStack(stack10);
    stack10.setNextStack(stack5);
    stack5.setNextStack(stack1);

    this.currentStack = stack100;
  }

  // SRP RESOLVED: This is now the responsibility of the MoneyStack CoR element
  // setNextStack() {
  //   this.billSize = this.denominations[this.denominations.indexOf(this.billSize) + 1];
  // }

  // SRP VIOLATION #3 (Possible)
  // Third reason for change
  // - Presentation layer for ejecting money
  // What if this text needs to change or we no longer need to console.log?
  _ejectMoney(numOfBills) {
    console.log(`${numOfBills} $${this.billSize} bill(s) has/have been spit out`);
  }

  withdraw(amount) {
    this.currentStack.withdraw(amount);
  }

  deposit(amount) {
    this.currentStack.deposit(amount);
  }

  getBalance() {
    //... Magic
  }
}

export default ATM;