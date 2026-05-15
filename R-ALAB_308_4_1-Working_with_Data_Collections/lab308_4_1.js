// Part 2: Expanding Functionality

let parentArray = []

let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// console.log(`This disaply the CSV`,csv);

let rows = csv.split("\n")
// console.log(`This disaply the Rows`, rows);

for (const row of rows) {
    let cells = row.split(",")
    parentArray.push(cells)

    // console.log(`This Parent Array the CSV`, parentArray);
}

console.log(parentArray)

// Part 3: Transforming Data

let headers = parentArray[0];
let finalResult = [];

for (let i = 1; i < parentArray.length; i++) {
    const obj = {};

    for (let j = 0; j < headers.length; j++) {
        obj[headers[j].toLowerCase()] = parentArray[i][j]
    }
    finalResult.push(obj)
}

console.log(finalResult)

// Part 4: Sorting and Manipulating Data
// 1. Pop 2. 

finalResult.pop()
finalResult.splice(1, 0, {
    id: "48",
    name: "Barry",
    occupation: "Runner",
    age: "25"
})
finalResult.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" }
)

console.log(finalResult)

// Average age

let totalAge = 0;

for (let i = 0; i < finalResult.length; i++) {
    totalAge += Number(finalResult[i].age);

    // console.log(`The total age is: `, totalAge)
}

let averageAge = totalAge / finalResult.length;

console.log("The average age is: ", averageAge);

// Part 5: Full Circle 

// Create the header row
let csvResult = "ID,Name,Occupation,Age";

// Use map() to transform each object into a CSV row
let csvRows = finalResult.map(function (employee) {

// Create one CSV row manually
return ( employee.id + "," + 
    employee.name + "," + 
    employee.occupation + "," + 
    employee.age ); });

// Add all rows separated by \n
 
csvResult += "\\n" + csvRows.join("\\n");

// Display final CSV string

console.log('let csv = "' + csvResult + '";');

