import ATM from './ATM';

let atm = new ATM([100, 50, 20, 10, 1]);

atm.withdraw(186);
/* outputs:
    100
    50
    20
    10
    5
    1
*/

atm.withdraw(72);
/* outputs:
    50
    20
    1
    1
*/
