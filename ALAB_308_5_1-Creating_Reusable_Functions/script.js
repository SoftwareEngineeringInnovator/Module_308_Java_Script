// Part 1: Thinking Functionally

// When coding, it is important to approach your work using small, manageable blocks of code. Some functions may become dozens or hundreds of lines long, but keeping things small and simple will help you scale and maintain your code.
// This section will have you build a few simple functions to accomplish arbitrary tasks. When building functions, remember that there are many ways to accomplish a task in programming. Sometimes, the shortest route is the best, and sometimes it is not.
// Take the following example, which contains five functions that accomplish the same task. If you were looking at this code for the first time, which would make the most sense to you?
// While there is rarely a “correct” answer in programming, it is important to keep your audience (other programmers) in mind. Write functions with descriptive names, and clear inputs and outputs.

// With that in mind, write functions that accomplish the following:

// Take an array of numbers and return the sum.
let sum = 0;
const numbers = [10, 20, 30, 40, 50, 60, 70, 100];

numbers.forEach((element) => sum += element);

console.log("Sum:", sum);

// Take an array of numbers and return the average.

let average = sum / numbers.length;

console.log("Average:", average);

// Take an array of strings and return the longest string.

let movies = ['Caddyshack', 'Scarface', 'The Count of Monte Cristo', 'Batman', 'The Expendables'];

const longest = movies.reduce((a, b) => a.length > b.length ? a : b);

console.log("Longest movie string is:", longest);
// Take an array of strings, and a number and return an array of the strings that are longer than the given number.
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

const result = movies.filter((word) => word.length > 10);

console.log("Movie strings longer than 10 charctaers:", result);

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

// Part 2: Thinking Methodically

// When functions are built into objects, like Arrays, they are referred to as “methods” of those objects. Many methods, including Array methods, require “callback functions” to determine their behavior.
// For the tasks below, use the following data to test your work:

const array = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }]

// Use callback functions alongside Array methods to accomplish the following:

// Sort the array by age.
array.sort((a, b) => a.age - b.age);
console.log("Array sort by age:", array);

// Filter the array to remove entries with an age greater than 50.
const filteredArray = array.filter((employee) => {
    return employee.age <= 50;

});

console.log("Filtered age 50 or younger:", filteredArray);


// Map the array to change the “occupation” key to “job” and increment every age by 1.
const mappedArray = array.map((employee) => {

    return {

        id: employee.id,

        name: employee.name,

        job: employee.occupation,

        age: Number(employee.age) + 1

    };

});

console.log("Mapped array:", mappedArray);


// Use the reduce method to calculate the sum of the ages.
const totalAge = array.reduce((sum, employee) => {

    return sum + Number(employee.age);

}, 0);

console.log("Total age:", totalAge);

// Then use the result to calculate the average age.
const averageAge = totalAge / array.length;

console.log("Average age:", averageAge);

// Part 3: Thinking Critically

// It is important to remember that when working with objects in JavaScript, we can either pass those objects into functions by value or by reference. This important distinction changes the way that functions behave, and can have large impacts on the way a program executes.
// For this section, develop functions that accomplish the following:
const person = { name: "Fredy", age: 46 };
// Take an object and increment its age field.
function incrementAge(person) {

    // if (person.age) {
    //     person.age = 0;
    // }

    if (!person.age) {
        person.age = 0;
    }
    person.age++;
    person.updated_at = new Date();
}
// console.log("Before incrementing age:", person);
incrementAge(person);
console.log("After incrementing age:", person);

// Take an object, make a copy, and increment the age field of the copy. Return the copy.
// For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.
// Thought experiment: since the Date object is an object, what would happen if we modified it in the copy of the object created in the second function using setTime() or another method? How could we circumvent potentially undesired behavior?