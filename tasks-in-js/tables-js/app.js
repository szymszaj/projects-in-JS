//destrukturyzacja
const hue = ['red', 'black', 'blue', 'green']

const firstHue = hue[0]
const secoundHue = hue[1]
hue.push('gray')

const [first, secound] = hue

const person = {
    name: 'Jan',
    lastName: 'Kowalski'
};

// Wyodrębnienie wartości z obiektu
const { name, lastName } = person;

console.log(name);      // Jan
console.log(
    lastName);  // Kowalski


const numbers9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Wyodrębnienie wartości z tablicy
const [pierwsza, druga, , czwarta] = numbers9;

console.log(pierwsza);  // 1
console.log(druga);     // 2
console.log(czwarta);   // 4


