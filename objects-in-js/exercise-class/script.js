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
