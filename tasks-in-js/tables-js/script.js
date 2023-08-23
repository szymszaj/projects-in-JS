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