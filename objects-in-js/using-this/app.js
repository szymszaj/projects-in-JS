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
