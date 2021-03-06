import MoneyStack from './MoneyStack';

class ATM {
  constructor(denominations) {
    this.stacks = [];

    denominations.forEach(bill => {
      let stack = new MoneyStack(bill);
      let prevStack = this.stacks[this.stacks.length - 1];

      if(prevStack) {
        prevStack.setNextStack(stack);
      }

      this.stacks.push(stack);
    });

    this.currentStack = this.stacks[this.stacks.length - 1];
  }

  withdraw(amount) {
    return this.currentStack.withdraw(amount);
  }

  // One method for creating an extension point
  // - EventType.addEventListener is a good example of following the OCP.
  // Also optimized for DIP (Plug-in pattern)
  registerAction(action, fn) {
    this[action] = fn.call(this);
  }
}

export default ATM;
