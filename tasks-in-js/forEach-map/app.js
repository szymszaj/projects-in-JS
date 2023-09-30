const people = [
    { name: 'Jan', lastName: 'Kowalski', country: 'Polska', solary: 1250 },
    { name: 'Anna', lastName: 'Brown', country: 'Niemcy', solary: 9855 },
    { name: 'Szymon', lastName: 'Smith', country: 'USA', solary: 500 },
    { name: 'Wojetek', lastName: 'Silva', country: 'UK', solary: 45000 },
    { name: 'Justyna', lastName: 'Enmena', country: 'Francja', solary: 8900 },
    { name: 'Kamil', lastName: 'Taylor', country: 'UK', solary: 2300 },
    { name: 'Luis', lastName: 'Dubois', country: 'Polska', solary: 500 },
    { name: 'Sarah', lastName: 'Joric', country: 'UK', solary: 57000 },
    { name: 'Mila', lastName: 'Klars', country: 'Australia', solary: 50300 },
];

const logPersonInfo = (person, index, arr) => {
    console.log(`${index + 1} z ${arr.length}: ${person.name} ${person.lastName}, kraj: ${person.country}`);
}

// for (let i = 0; i < people.length; i++) {
//     const person = people[i]
//     logPersonInfo(person, i, people)
// }

people.forEach((induce) => {
    console.log(induce);
})

// people.forEach((person, index, arr) => {
//     logPersonInfo(person, index, arr);
// })


people.forEach(logPersonInfo)

// const richPeople = []
// for (let i = 0; i < people.length; i++) {
//     const person = people[i]
//     if (person.solary > 5000) {
//         richPeople.push(person)
//     }
// }
const richPeople = people.filter((person) => person.solary > 5000)

console.log("Rich people");
console.log(richPeople);

// const polishPeople = []
// for (let i = 0; i<people.length; i++) {
//     const person = people[i]
//     if(person.country ==="Polska"){
//         polishPeople.push(person)
//     }
// }

const polishPeople = people.filter((person) => person.country === "Polska")
console.log("Polish people");
console.log(polishPeople);