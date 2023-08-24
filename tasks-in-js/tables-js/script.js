const numbers = [1, 2, 3, 4, 5]
console.log(numbers);

numbers.unshift(22, 32) //unshift - dodaje na pcozatek tablicy 

numbers.shift(4)
console.log(numbers); //shift - usuwa element z indeksem 0 

const color = ['red', 'black', 'green', 'blue']
console.log(color);

color.push('gold')
console.log(color); //push - dodaje elementy 

color.pop()//pop usuwa elementy (ostatni z tablicy)
console.log(color);


const car = ['audi', 'bmw', 'volvo', 'mercedes']
console.log(car);

car.pop()
// console.log(car);
car.push('mustang', 'dodge')
console.log(car);

const drink = ['pepsi', 'woda', 'mirinda', 'herbata']
console.log(drink);

drink.pop
console.log(...drink);


const zwierzeta = ['Kot', 'Pies', 'Królik', 'Chomik'];

console.log(zwierzeta[0]);
console.log(zwierzeta[2]);
console.log(zwierzeta.length);

zwierzeta.push('Ptak');
console.log(zwierzeta);

zwierzeta.pop();
console.log(zwierzeta);

console.log(zwierzeta.indexOf('Pies'));

zwierzeta[1] = 'Owczarek Niemiecki';
console.log(zwierzeta);


const numbers1 = [1, 2, 3, 4, 5]
function multiply(x) {
    return x * 2
}
const newNumbers = numbers1.map(multiply)
console.log(numbers1);
console.log(newNumbers);

numbers1.push(6, 7, 8)

const abc = ['a', 'b', 'c', true]


const newAbc = numbers1.concat(abc) //łaczenie tablic 
console.log(newAbc);


//zadanie 
const numbers2 = [0, 0, 1, 1, 2, 2, 2]
const colors = ['red', 'green', 'blue', true, 123]

const numbers3 = numbers2.slice(0, 2)
console.log(numbers3);

const randomStuff = colors.splice(-2)
console.log(colors);
console.log(randomStuff);


//metody 
const numbersX = [0, 23, 48, 175, 2, 32, 11, 232, 44, 55]
function num(x) {
    return x % 2 === 0
}
console.log(numbersX.filter(num));


