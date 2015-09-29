class MoneyStack {
  constructor(billSize, currency) {
    this.billSize = billSize;
    this.currency = currency;
    this.next = null;
  }

  withdraw(amount) {
    const numOfBills = Math.floor(amount / this.billSize);
    const next = this.next;

    if (numOfBills > 0) {
      amount = amount - (this.billSize * numOfBills);
    }

    if(amount > 0 && this.next) {
      if(this.next.currency === this.currency) {
        this.next.withdraw(amount);
        return;
      }
    }

    return numOfBills;
  }

  setNextStack(stack) {
    this.next = stack;
  }
}

export default MoneyStack;
