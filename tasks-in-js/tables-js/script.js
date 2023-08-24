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
