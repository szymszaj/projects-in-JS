class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  describe(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

class Student extends Person {
  isStudent: boolean;
  subjects: string[];

  constructor(
    name: string,
    age: number,
    isStudent: boolean,
    subjects: string[]
  ) {
    super(name, age);
    this.isStudent = isStudent;
    this.subjects = subjects;
  }

  addSubject(subject: string): void {
    this.subjects.push(subject);
  }

  listSubjects(): void {
    console.log(`${this.name} is studying the following subjects:`);
    this.subjects.forEach((subject) => {
      console.log(subject);
    });
  }
}

// Creating instances
let student1 = new Student("John", 20, true, ["Math", "Science"]);
let student2 = new Student("Alice", 22, true, ["History", "English"]);

student1.addSubject("Computer Science");

student1.listSubjects();

// Describing students
console.log(student1.describe());
console.log(student2.describe());
