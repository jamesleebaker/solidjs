class MoneyStack {
  constructor(billSize, currency) {
    this.billSize = billSize;
    this.currency = currency;
    this.next = null;
  }

  withdraw(amount) {
    const numOfBills = Math.floor(amount / this.billSize);

    if (numOfBills > 0) {
      amount = amount - (this.billSize * numOfBills);
    }

    if(amount > 0 && this.next) {
      return this.next.withdraw(amount);
    }

    return numOfBills;
  }

  deposit(amount) {
    const numOfBills = Math.floor(amount / this.billSize);

    if (numOfBills > 0) {
      amount = amount - (this.billSize * numOfBills);
    }

    if(amount > 0 && this.next) {
      this.next.deposit(amount);
      return;
    }

    return numOfBills;
  }

  setNextStack(stack) {
    this.next = stack;
  }
}

export default MoneyStack;
