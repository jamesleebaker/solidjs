import ATM from './ATM';

let atm = new ATM([100, 50, 20, 10, 1]);

let bills = atm.withdraw(186);
console.log(`${bills} bill(s) has/have been spit out`);
/* outputs:
    100
    50
    20
    10
    5
    1
*/

bills = atm.withdraw(72);
console.log(`${bills} bill(s) has/have been spit out`);
/* outputs:
    50
    20
    1
    1
*/
