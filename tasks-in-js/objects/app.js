// const myObject = {
//     key: value,
//     key: value,
//     key: value
// }
//test1
const newUser = {
  name: "Lisa",
  age: 23,
  car: {
    brand: "audi",
    color: "black",
  },
};
// console.log(newUser.name);
// console.log(newUser.age);
// console.log(newUser.car.color);
// console.log(newUser.car.brand);

console.log(`${newUser.name} jezdzi samochode marki ${newUser.car.brand},
o kolorze ${newUser.car.color}`);

//test2
const newPeople = {
  name: "Marek",
  age: "20",
  hobby: "read the book",
};

console.log(newPeople.age);
console.log(newPeople.hobby);

//test3
const maleNames = [
  "Adam",
  "Bartek",
  "Cezary",
  "Dawid",
  "Eryk",
  "Filip",
  "Grzegorz",
  "Hubert",
  "Igor",
  "Jan",
  "Kamil",
  "Lukasz",
];

const femaleNames = [
  "Anna",
  "Beata",
  "Celina",
  "Daria",
  "Eliza",
  "Fiona",
  "Gabriela",
  "Hanna",
  "Izabela",
  "Joanna",
  "Kasia",
  "Laura",
];

function generateRandomName() {
  const randomMaleName =
    maleNames[Math.floor(Math.random() * maleNames.length)];
  const randomFemaleName =
    femaleNames[Math.floor(Math.random() * femaleNames.length)];

  const gender = Math.random() < 0.5 ? "M" : "F";
  let name;

  if (gender === "M") {
    name = randomMaleName;
  } else {
    name = randomFemaleName;
  }

  return name;
}

const autoUser = {
  name: generateRandomName(),
  age: 20,
  hobby: {
    first: "read the book",
  },
};

console.log(autoUser.name);
console.log(autoUser.age);
console.log(autoUser.hobby.first);

//destrukturyzacja

const person = {
  name: "Szymon",
  age: 20,
  job: "DJ",
  car: {
    model: "viper",
    brand: "dodge",
  },
};

const showInfo = ({ job, name, age }) => {
  console.log(`${name} pracuje jako ${job} i ma ${age} lat`);
};

const showInfo2 = ({ car: { brand, model } }) => {
  console.log(`jego samochód to ${brand} ${model}`);
};

showInfo2(person);
showInfo(person);
