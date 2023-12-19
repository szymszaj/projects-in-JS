// Destrukturyzacja tablic
const array = ['React', 'Angular', 'Vue'];

const [firstElement, secondElementWithOurCustomName] = array;
console.log(firstElement); // React
console.log(secondElementWithOurCustomName);

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1