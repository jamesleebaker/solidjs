import MoneyStack from './MoneyStack';

const CURRENCY = 'yen';

class YenStack extends MoneyStack {
  constructor(billSize) {
    super(billSize, CURRENCY);
  }
}
