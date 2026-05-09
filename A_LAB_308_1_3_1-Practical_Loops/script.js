console.log(`Plants Lab:`);

//PI
const PI = 3.1415;
//Radius of growing area in the garden
const radius = 5;
//How much space growing area in the garden
const area = PI * radius * radius;
//Minimun Single Plant Takes (in square meters)
const minPlantSpace = 0.8;
// starting number of plants
const startingPlants = 20;
// How many planst can fit in the area of thegarden
const capacity = area / minPlantSpace;
// 80% of MAX capacity
const eightyPercentofMax = capacity * 0.8;
console.log('80% of Capacity', eightyPercentofMax);
// 50% of MAX capacity
const fiftyPercentofMax = capacity * 0.5;
console.log('80% of Capacity', eightyPercentofMax);

console.log('Area: ', area);
console.log('Capacity: ', capacity);
console.log(`80% of Capacity:`, eightyPercentofMax);
console.log(`50% of Capacity:`, fiftyPercentofMax);

// What is the number of plants after 1 week (it doubles asfter one week)
let totalNumberofPlants = startingPlants * 2;
console.log(`Number of plants after 1 week: `, totalNumberofPlants);


// Note: After 1, week

if (totalNumberofPlants > eightyPercentofMax) {
// Pruned, to stop them from exceeding the capacity of the 
// garden. This condition should be met if the plant count 
// after the iven number of weeks is greater than 80% of 
// the maximum capacity of the garden.
    console.log('Prune. Too many plants...')
} else if (totalNumberofPlants >= fiftyPercentofMax && totalNumberofPlants <= fiftyPercentofMax) {
// Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 
// 50% and 80% of the maximum capacity of the garden after the 
// given number of weeks.
    console.log('Monitor. Acceptable rate of growth')
// Planted, if there is room to plant more plants. This condition 
// should be met if the plant count after the given number of weeks 
// is less than 50% of the maximum capacity of the garden.Within 
// your submission, include the results for 1, 2, and 3 weeks 
// of growth as inputs.
} else {
    console.log('Planted')
}

// How many plants after 2 weeks
toltalNumberofPlants = totalNumberofPlants * 2
console.log(`Number of plants after 2 week: `, totalNumberofPlants)

// How many plants after 3 weeks
toltalNumberofPlants = totalNumberofPlants * 2
console.log(`Number of plants after 3 week: `, totalNumberofPlants);







