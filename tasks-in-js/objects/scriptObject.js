const person = {
  firstName: "spangebob",
  lastName: "bob",
  age: 30,
  isEmployed: true,
  sayHello: function () {
    console.log("Hi I am spangebob");
  },
  eat: function () {
    console.log("I'm eating ramen.");
  },
};
const person1 = {
  firstName: "Patrick",
  lastName: "Rock",
  age: 20,
  isEmployed: false,
  sayHello: () => {
    console.log("Hey I'm Patrick");
  },
  eat: () => {
    console.log("I love eating pizza");
  },
};

person.sayHello();
person1.sayHello();

person1.eat();
