//Team Members:
/*Jacky Lai
Isaias Ruiz
Tahmina Akter
Armando Aguilar */

// Excercise # 1
let a = 1;
let b = 4;
let c = a + b;
console.log(c);


// Writting my first javascript statement
//single line comment
/* Multi
Line
comment
*/
console.log('Hello World!'); console.log('Test'); console.log('Test 1...2...3');
console.log('another line');
console.log(1+1)

// DATA TYPES:

/* NUMBERS:
 -3, -1, 1, 10, 99, 283, etc 
 1.5, 34.33, 5.0*/

//Objects
 {};

//  VARIABLES (like a box)
let firstName;

//Declaring VARIABLES (use let, const, or var)
let lastName; //(value is undefined)

//declare and initialize (assign) (use the assignment operator)
let middleName = "Bob";
console.log(middleName);
//Reassign the Value
middleName = "Billy";
console.log(middleName);

let x = 10;
console.log(x);

{
    let x = 2;
    console.log(x);
}

console.log(x);

const PI = 3.14;
PI;
console.log(PI);

// Arimethic Operators
3 + 3;
3 - 3;
3 * 3;
3 / 3;

// Module Operator
14 % 3;
4 % 4;
150 % 2;

let myNumber = 10;
myNumber += 1;

myNumber++
console.log(myNumber);

//String Access
"Hello"[0]
firstName = 'Peter';
lastName = 'Griffin';
console.log(firstName[4]);
// === <- strict equality (compare data type and value)
// == <- 
// = <-

const frost0 =
	"Nature’s first green is gold, " +
	"Her hardest hue to hold. " +
	"Her early leaf’s a flower; " +
	"But only so an hour. " +
	"Then leaf subsides to leaf. " +
	"So Eden sank to grief, " +
	"So dawn goes down to day. " +
	"Nothing gold can stay. ";

console.log(frost0);

const frost1 =
	"Nature’s first green is gold, \
Her hardest hue to hold. \
Her early leaf’s a flower; \
But only so an hour. \
Then leaf subsides to leaf. \
So Eden sank to grief, \
So dawn goes down to day. \
Nothing gold can stay.";

console.log(frost1);

const greeting = 'Hello my name is ${firstName[4]} ${lastName[4]}'
console.log('Hello my name is ${firstName[4]} ${lastName[4]}');
console.log(greeting);