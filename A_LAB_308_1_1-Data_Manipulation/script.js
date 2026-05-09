//Team Members:
/*Jacky Lai
Isaias Ruiz
Tahmina Akter
Armando Aguilar */

// Part 1 - Check if all numbers are divisible by 5. Cache the result in a variable
const num1 = 10;
const num2 = 20;
const num3 = 5;
const num4 = 15;
const result =
num1 % 5 === 0 &&
num2 % 5 === 0 &&
num3 % 5 === 0 &&
num4 % 5 === 0;
console.log(`All numbers are divisible by 5: ${result}`);

/* Check if the first number is larger than the last.
Cache the result in a variable.*/

const largerNumber = num1 > num4;
console.log(`First number is larger than last: ${largerNumber}`);

/*Accomplish the following arithmetic chain:

- Subtract the first number from the second number.
- Multiply the result by the third number.
- Find the remainder of dividing the result by the fourth number. */

const subtractNumber = num2 - num1;
console.log(`Subtract Number: ${subtractNumber}`);
const multiplyNumber = subtractNumber * num3;
console.log(`Multiply Number: ${multiplyNumber}`);
const reminder = multiplyNumber % num4;
console.log(`Reminder Number: ${reminder}`);

/*Change the way that isOver25
calculates so that we do not need to use the
NOT operator (!) in other logic comparisons.
Rename the variable as appropriate.*/

const num5 = num1 <= 25;

// const result = num1 > 25 ||
console.log(`First number is 25 or less: ${num5}`);
const isValid = largerNumber && result && num5;
console.log(`The number is valid: ${isValid}`);

// Part 2: Practical Math

/*You are planning a cross-country road trip!

The distance of the trip, in total, is 1,500 miles.

Your car’s fuel efficiency is as follows:

- At 55 miles per hour, you get 30 miles per gallon.
- At 60 miles per hour, you get 28 miles per gallon.
- At 75 miles per hour, you get 23 miles per gallon.

You have a fuel budget of $175.
The average cost of fuel is $3 per gallon.*/

// How many gallons of fuel will you need for the entire trip?

const totalMiles = 1500;
let mph55 = 30;
let mph65 = 28;
let mph75 = 23;
let fuelBuget = 175;
let gallCost = 3;

console.log(`How many gallons of fuel will you need for the entire trip?`)
console.log(`At 55 mph, you'll get 30 miles per gallon.`)
const gallonsNeededat55mph = totalMiles / mph55;
console.log(`${gallonsNeededat55mph} gallons will be used traveling 1500 miles at 55 mph.`);
console.log(`At 65 mph, you'll get 28 miles per gallon.`)
const gallonsNeededat65mph = totalMiles / mph65;
console.log(`${gallonsNeededat65mph} gallons will be used traveling 1500 miles at 65 mph.`);
console.log(`At 75 mph, you'll get 23 miles per gallon.`)
const gallonsNeededat75mph = totalMiles / mph75;
console.log(`${gallonsNeededat75mph} gallons will be used traveling 1500 miles at 75 mph.`);

console.log(`-------------------------------------------------------------------`)
console.log(`Will your budget be enough to cover the fuel expense?`)

const fuelCostat55mph = gallonsNeededat55mph * gallCost;
console.log(`$${fuelCostat55mph} dollars is the total cost by traveling 1500 miles at 55 mph.`);
let fuelBugetat55 = fuelBuget >= fuelCostat55mph;
console.log(`Driving at 55 mph will be under or equeal to my buget? ${fuelBugetat55}`);
const fuelCostat65mph = gallonsNeededat65mph * gallCost;
console.log(`$${fuelCostat65mph} dollars is the total cost by traveling 1500 miles at 65 mph.`);
let fuelBugetat65 = fuelBuget >= fuelCostat65mph;
console.log(`Driving at 65 mph will be under or equeal to my buget? ${fuelBugetat65}`);
const fuelCostat75mph = gallonsNeededat75mph * gallCost;
console.log(`$${fuelCostat75mph} dollars is the total cost by traveling 1500 miles at 75 mph.`);
let fuelBugetat75 = fuelBuget >= fuelCostat75mph;
console.log(`Driving at 55 mph will be under or equeal to my buget? ${fuelBugetat75}`);
console.log(`-------------------------------------------------------------------`)
console.log(`How long will the trip take, in hours?`) 
let spentHrsat55 = totalMiles / 55;
console.log(`At 55 mph, you'll get there in ${spentHrsat55} hrs.`);
let spentHrsat65 = totalMiles / 65;
console.log(`At 65 mph, you'll get there in ${spentHrsat65} hrs.`);
let spentHrsat75 = totalMiles / 75;
console.log(`At 75 mph, you'll get there in ${spentHrsat75} hrs.`);
console.log(`-------------------------------------------------------------------`)
