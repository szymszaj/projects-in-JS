// Skipping names
const [, age1, , age2, , age3] = array;

console.log(age1); // 25
console.log(age2); // 30
console.log(age3); // 22
const array = ["Anna", 25, "John", 30, "Eva", 22, "Christopher", 28];

// Destructuring with the rest operator for names
const [first_name, first_age, ...rest_names] = array;

console.log(first_name, first_age); // Anna 25
console.log(rest_names); // ["John", 30, "Eva", 22, "Christopher", 28]
