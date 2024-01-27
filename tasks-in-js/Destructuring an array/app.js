// Sample array with names and numbers
// const array = ["Anna", 25, "John", 30, "Eva", 22];

// Destructuring the array
// const [name1, age1, name2, age2, name3, age3] = array;

// Displaying the results
console.log(name1, age1); // Anna 25
console.log(name2, age2); // John 30
console.log(name3, age3); // Eva 22

const array = ["Anna", 25, "John", 30, "Eva", 22];

// Skipping names
const [, age1, , age2, , age3] = array;

console.log(age1); // 25
console.log(age2); // 30
console.log(age3); // 22
