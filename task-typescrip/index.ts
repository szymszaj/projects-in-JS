class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  isStudent: boolean;

  constructor(name: string, age: number, isStudent: boolean) {
    super(name, age);
    this.isStudent = isStudent;
  }
}

let student1 = new Student("John", 20, true);
let student2 = new Student("Alice", 22, true);
