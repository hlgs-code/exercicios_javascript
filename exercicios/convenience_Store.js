/*

Convenience Store

Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
Examples

changeEnough([2, 100, 0, 0], 14.11) ➞ false

changeEnough([0, 0, 20, 5], 0.75) ➞ true

changeEnough([30, 40, 20, 5], 12.55) ➞ true

changeEnough([10, 0, 0, 50], 3.85) ➞ false

changeEnough([1, 0, 5, 219], 19.99) ➞ false

Notes

    quarter: 25 cents / $0.25
    dime: 10 cents / $0.10
    nickel: 5 cents / $0.05
    penny: 1 cent / $0.01

https://edabit.com/challenge/erFxBbqzZPSegMwnc

*/

function changeEnough(change, amountDue) {

    let array = change.map(function (a, b) {
         if(b == 0){
            return (a * 25)/100
         }else if(b == 1){
            return (a * 10)/100
         }else if (b == 2){
            return (a * 5)/100
         } else {
            return (a)/100
         }
        }
    )

    let total = array.reduce((total, numero) => total + numero, 0)
    
    if (total >= amountDue){
        return true
    } else{
        return false
    }
}


console.log(changeEnough([2, 100, 0, 0], 14.11))

console.log(changeEnough([0, 0, 20, 5], 0.75))

console.log(changeEnough([30, 40, 20, 5], 12.55))

console.log(changeEnough([10, 0, 0, 50], 3.85))

console.log(changeEnough([1, 0, 5, 219], 19.99))