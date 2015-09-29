import MoneyStack from './MoneyStack';

const CURRENCY = 'dollar';

class USGeneralStack extends MoneyStack {
  constructor(billSize) {
    super(billSize, CURRENCY);
  }
}
