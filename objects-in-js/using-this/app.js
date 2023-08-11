//funkcja strzalkowa opakowana!!!

const op = {
    number: 123, 
    showNumber() {
        console.log(this.number);
    },
    showName2(){
        const test = () =>{
            console.log(this.number);
            console.log(this);
        }
        test()
    }
}
op.showNumber()
op.showName2()


const person = {
    age: 30,
    showAge() {
        console.log(this.age);
    },
    showDetails() {
        const display = () => {
            console.log(this.age);
            console.log(this);
        };
        display();
    }
};

person.showAge();  
person.showDetails(); 


//BIND 

function test () {
    console.log(this);
    console.log(this.name);
}

const car1 = {
    name:'audi',
}
const car2 ={
    name:'dodge',

}
const car3 = {
    name: 'nissan',
}
test.bind(car3)()


//BIND 2

function ob () {
    console.log(this);
    console.log(this.age);
}

const century = {
    age: 12,
}
const century2 = {
    age: 124,
}
const century3 = {
    age: 33,
}

ob.bind(century2)()
