//this
const user = {
    name: 'Szymon',
    age: 23,
    showName(){
        console.log(this.name);
        console.log(this.age);
    }
}

user.showName()

//konstruktor
function User(name, age){
    this.name = name 
    this.age = age 


    this.hello = function () {
        console.log(`cześć ${this.name}`);
    }
}

const newUser = new User('szymon', 23)

const newUser2 = new User('adrian', 23)
console.log(newUser);
newUser2.hello()


//new object
function People(work, age){
    this.work = work
    this.age = age 
}
const newPeople = new People('IT', 40)
console.log(newPeople);


