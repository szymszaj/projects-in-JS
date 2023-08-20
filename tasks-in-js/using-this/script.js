// //this
// const user = {
//     name: 'Szymon',
//     age: 23,
//     showName(){
//         console.log(this.name);
//         console.log(this.age);
//     }
// }

// user.showName()

// //konstruktor
// function User(name, age){
//     this.name = name 
//     this.age = age 


//     this.hello = function () {
//         console.log(`cześć ${this.name}`);
//     }
// }

// const newUser = new User('szymon', 23)

// const newUser2 = new User('adrian', 23)
// console.log(newUser);
// newUser2.hello()


// //new object
// function People(work, age){
//     this.work = work
//     this.age = age 
// }
// const newPeople = new People('IT', 40)
// console.log(newPeople);


const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')
const btn3 = document.querySelector('.btn-3')
const p = document.querySelector('p')

function Food(name, price) {
    this.name = name 
    this.price = price
}
const meal = new Food('pizza', 29)
const meal2 = new Food('frytki', 11)
const meal3 = new Food('woda', 4)

Food.prototype.showInfo = function(){
    console.log(`${this.name} kosztuje ${this.price} zl.`);
}
btn1.addEventListener('click', () => meal.showInfo())
btn2.addEventListener('click', () => meal2.showInfo())
btn3.addEventListener('click', () => meal3.showInfo())
