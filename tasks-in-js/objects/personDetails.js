const person = {
  firsName: "Szymon",
  lastName: "bob",
  age: 21,
  isEmployed: true,
  occupation: "developer",
  sayHello: function () {
    console.log("Hi I'm Szymon");
  },
  describe: function () {
    console.log(
      `${this.firsName} ${this.lastName} is ${this.age} years old and works as a ${this.occupation}`
    );
  },
};

person.describe();

const person1 = {
  firstName: "Patrick",
  lastName: "Rock",
  age: 26,
  isEmployed: false,
  occupation: "musician",
  sayHello: () => {
    console.log("Hey I'm Patrick");
  },
  describe: function () {
    console.log(
      `${this.firstName} ${this.lastName} is ${this.age} years old and works as a ${this.occupation}.`
    );
  },
};

person1.describe();

// const likeSentence = (person) => {
//   console.log(`I like ${person.occupation} because...`);
// };

likeSentence(person);
likeSentence(person1);

const person2 = {
  firstName: "Anna",
  lastName: "Smith",
  age: 30,
  isEmployed: true,
  occupation: "teacher",
  sayHello: function () {
    console.log("Hello, I'm Anna");
  },
  describe: function () {
    console.log(
      `${this.firstName} ${this.lastName} is ${this.age} years old and works as a ${this.occupation}.`
    );
  },
};

person2.describe();

const person3 = {
  firstName: "John",
  lastName: "Doe",
  age: 35,
  isEmployed: true,
  occupation: "engineer",
  sayHello: function () {
    console.log("Hi, I'm John");
  },
  describe: function () {
    console.log(
      `${this.firstName} ${this.lastName} is ${this.age} years old and works as a ${this.occupation}.`
    );
  },
};

person3.describe();

const likeSentence = (person) => {
  console.log(`I like ${person.occupation} because...`);
};

likeSentence(person);
likeSentence(person1);
likeSentence(person2);
likeSentence(person3);
