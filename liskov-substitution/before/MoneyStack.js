class MoneyStack {
  constructor(billSize) {
    this.billSize = billSize;
    this.next = null;
  }

  withdraw(amount) {
    const numOfBills = Math.floor(amount / this.billSize);

    if (numOfBills > 0) {
      amount = amount - (this.billSize * numOfBills);
    }

    if(amount > 0 && this.next) {
      this.next.withdraw(amount);
      return;
    }

    return numOfBills;
  }

  setNextStack(stack) {
    this.next = stack;
  }
}

export default MoneyStack;
