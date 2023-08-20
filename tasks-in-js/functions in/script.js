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