const person = function () {

    console.log(`mam na imie szymon`);
}
person()


function person1(name, age) {
   console.log(`mam na imie ${name} i mam ${age} lat`);
}
person1('szymon', 29)

const test2 = (name) => {
    console.log(`mam na imie ${name}`)
}
test2('kalaudia')

const day = ['poniedzialek, wtorek, sroda']
const day2 = day.forEach(function(day){
    console.log(day);
})

//

console.log('----');

const day3  = day.forEach(day => console.log(day))


const meal = ['mleko, jajka, sałata']
const meal1 = meal.forEach(meal =>console.log(meal))


const hobby = ['gitara, gry, narty, sport']
const hobby1 = hobby.forEach(hobby => console.log(hobby))

//rest 

const numbers = (x, y, ...z) => {
    console.log(x,y,z);
    console.log(z.map(el => el*2));

    
}


numbers(55,55,99,1231231231,5454,343)

//zakresy 

const name = 'Lisa'
let food 

const test  = () => {
    const name = 'lily'
    console.log(`name w funkcji - ${name}`);

    food = 'schabowy'
    console.log(food = ':D');
    const age = 20 
    console.log(age);

    const test2 = () => {
        console.log('----'); 
        food = 123 
        console.log(food);
        
        console.log(name ); 
        console.log(age);   
        const color = 'blue'    
        console.log(color);


    }

    test2()
    const test3 = () => {
        console.log(color);
    }

}

test()

console.log(`name poza funkcja -${name }`);