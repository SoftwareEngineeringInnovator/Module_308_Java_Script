// Conditional Practice

// SCOPE
// let x = 10;
// let y = 5;

// {
// 	let z = x + y;
// 	console.log(z);
// }

// let z;
// console.log(`The value of Z is ${z}`);

//Conditionals

let x = 5;

//runs code blcok if the condition is true
if (x != 10) { //If statement scope
    //do this
    console.log(`passed the test`);
}

if (x == 10) { //if statement scope
    //do this
    console.log(`passed the test`) ;
} else { //else statement scope
 console.log(`failed the test`);
}

// Declare a variable called num
// Write a conditional statement that checks if the num is positive or negative.

let num = 10;

//checking if number is negative (or less than 0)
if (num < 0) {
    console.log("num is less than zero");
//check if it is positive
} else if (num > 0) {
    console.log("num is more than zero");
// probably zero
} else {
    console.log("num is zero");
}

// If you were tasked with setting up the security for a web site 
// that only grants access to users over the age of 18, 
// how would you write a conditional that gives users 
// who are 18 or older access, and logs "Access Denied" 
// for users who do not meet the given 
// condition? Give it a try!

let userAge = 18;

// check if the user is less than 18 years old
if (userAge >= 18) {
    console.log('Access granted');
} else {
    console.log("Access Denied");
}

// 1. Declare the variable
let num1 = 0; 

// 2. Check if the number is positive (outer statement)
if (num1 > 0) {
    
    // 3. Nested check (inner statement)
    if (num1 > 100) {
        console.log(`${num1} is positive and greater than 100`);
    } else {
        console.log(`${num1} is positive but less than 100`);
    }

} 
// 4. Final statement for negative numbers
else if (num1 < 0) {
    console.log(`${num1} is negative`);
} 
// 5. Handling the case for exactly zero
else {
    console.log(`${num1} is exactly zero`);
}

// Exercise
// Write an if..else statement for the following requirements:

// If a learner gets 90 or higher: console.log("A")
// If a learner get 80 or above: console.log("B")
// If a learner get 70 or above: console.log("C")
// If a learner get 55 or above: console.log("D")
// Any grade lower than 55: console.log("F")

//Nested statement

// Exercise
// Write a nested if...else statement.
// Declare a variable called num.
// Add an if...else statement that checks if num is positive & greater than 100.
// Add another statement that checks if num is positive but less than 100.
// Add a final statement to check if num is negative.
// Exercise
// Write an if..else statement for the following requirements:

// If a learner gets 90 or higher: console.log("A")
// If a learner get 80 or above: console.log("B")
// If a learner get 70 or above: console.log("C")
// If a learner get 55 or above: console.log("D")
// Any grade lower than 55: console.log("F")


//front door of our house
// if (true) {
    // door to our bedroom
//     if () {

//     }
// }

let num2 = 0;

if (num2 > 0) {
    console.log(`Positive`)
    // door to our bedroom
    if (num2 > 100) {
        console.log(`Greater than a 100`)
    }
} else if (num2 < 0) {
    console.log(`Negative`)
} else {
    console.log(`number is zero`)
}

let age = 19;

//

// console.log(conditional) ? (value_if_true) : (value_if_false)

console.log(age >= 18 ? "Access Granted" : "Access Denied.")
const access = age >= 18 ? "Ganted" : "Denied."
console.log(access)

// if (access === "Granted") {}

let x1 = 10;
//try catch
try {
	if (x1 < 0) {
		console.log("Negative!");
	} else {
		throw "Error - I don't know what I'm doing.";
	}
     //Potentially buggy code
    //error-prone code
} catch (error) {
	console.log(error);
}

console.log("Does this log?");


// Debugging
let x2 = -1;
        let isEven;

        try {
            if (x2 > 0) {
                //ternary (three parts)
                isEven = (x2 % 2 == 0) ? true : false;
            } else if (x2 <= 0) {
                throw "Error - Value of 0 or below.";
            }

            console.log(isEven);
        } catch (err) {
            console.log(err);
        } finally {
            console.log(x2);
        }

