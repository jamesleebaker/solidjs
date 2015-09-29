import MoneyStack from './MoneyStack';

const CURRENCY = 'dollar';

class USLimitedStack extends MoneyStack {
  constructor(billSize) {
    super(billSize, CURRENCY);
  }
}
