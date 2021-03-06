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

  withdraw(amount) {
    return this.currentStack.withdraw(amount);
  }

  deposit(amount) {
    this.currentStack.deposit(amount);
  }

  getBalance() {
    //... Magic
  }

  // OCP VIOLATION #2
  // What if we want to add additional functionality in the future?
  // For example: Transfer, Bill Pay, etc.
}

export default ATM;
