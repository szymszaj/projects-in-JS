function Person (name, age) {
    this.name = name 
    this.age = age
}

Person.prototype.sayHi = function () {
    console.log(`Cześć, jestem ${this.name}!`);
}
Person.prototype.showAge = function() {
    console.log(`mam ${this.age} lata.`);
}

const person1 = new Person('Szymon', 20)
person1.sayHi()
person1.showAge()

//--------------------
//class
class Person2 {
    constructor(name, age) {
        this.name = name 
        this.age = age
    }

    sayHi(){
        console.log(`cześć jestem ${this.name}`);
    }
    showAge(){
        console.log(`mam ${this.age} lata :D`);
    }
}
const person2 = new Person2('Ania',50)
person2.sayHi()
person2.showAge()


//next example

function Car(model, vehicleYear) {
    this.model = model
    this.vehicleYear = vehicleYear
}

Car.prototype.info = function() {
    console.log(`marka to ${this.model}`);
}

Car.prototype.bought = function() {
    console.log(`z ${this.vehicleYear} roku!`);
}
const car1 = new Car('audi', 2019)
car1.info()
car1.bought()
//-------------------------
class Car2 {
    constructor(model, vehicleYear) {
        this.model = model
        this.vehicleYear = vehicleYear
    }

    info(){
        console.log(`posiadam ${this.model}`);
    }

    boughtYear(){
        console.log(`kupiłem go w ${this.vehicleYear}`);
    }
}
const car2 = new Car2('BMW', 2023)
car2.info()
car2.boughtYear()


//class 3
class Animal {
    constructor(name, age){
        this.name = name 
        this.age = age 
    }

    dog(){
        console.log(`pies nazywa sie ${this.name}`);
    }
    dogAge(){
        console.log(`w tym roku ma ${this.age} lat`);
    }
    
}
const dog2 = new Animal('tosia', 5)
dog2.dog()
dog2.dogAge()

//clss 4
class Meal {
    constructor(dish, time){
        this.dish = dish
        this.time = time
    }

    food(){
        console.log(`lubie jeść ${this.dish}`);
    }
    timeFood(){
        console.log(`robi sie go ${this.time} minut`);
    }
}
const meal2 = new Meal('ramen', 10)
meal2.food()
meal2.timeFood()

//calss 5 
class Laptop {
    constructor(price, model){
        this.price = price
        this.model = model
    }

    newLaptop(){
        console.log(`laptop model is ${this.model} `);
    }

    priceLaptop(){
        console.log(`laptop price is ${this.price} dollars`);
    }
}
const laptop2 = new Laptop(5000, 'MSI')
laptop2.newLaptop()
laptop2.priceLaptop()

//class 6 

class Book {
    constructor(author, price ){
        this.author = author
        this.price = price
    }

    thisBook(){
        console.log(`tą książkę napisał ${this.author}`);
    }

    priceBook(){
        console.log(`książka kosztuje ${this.price} zł.`);
    }
}
const book2 = new Book('Gregory Sonry', 78)
book2.thisBook()
book2.priceBook()

//class 7
class Smartphone {
    constructor(model, price, advantages ){
        this.model = model
        this.price = price
        this.advantages = advantages
    }

    modelInfo(){
        console.log(`marka telefonu to ${this.model}`);
    }
    priceInfo(){
        console.log(`telefon kosztuje ${this.price}`);

    }

    advantagesInfo(){
        console.log(`telefon robi ${this.advantages}`);
    }
}

const smartphone1 = new Smartphone('Samsung', 1300, 'znakomite zdjecia')
smartphone1.modelInfo()
smartphone1.priceInfo()
smartphone1.advantagesInfo()
