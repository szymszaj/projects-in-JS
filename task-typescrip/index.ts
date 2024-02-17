class Person {
  name: string; // Deklaruje pole 'name' typu string.
  age: number; // Deklaruje pole 'age' typu number.

  constructor(name: string, age: number) {
    // Deklaruje konstruktor przyjmujący dwa argumenty: 'name' typu string i 'age' typu number.
    this.name = name; // Inicjalizuje pole 'name' obiektu klasy Person wartością przekazaną do konstruktora.
    this.age = age; // Inicjalizuje pole 'age' obiektu klasy Person wartością przekazaną do konstruktora.
  }
}

class Student extends Person {
  isStudent: boolean; // Deklaruje pole 'isStudent' typu boolean.

  constructor(name: string, age: number, isStudent: boolean) {
    // Deklaruje konstruktor przyjmujący trzy argumenty: 'name' typu string, 'age' typu number i 'isStudent' typu boolean.
    super(name, age); // Wywołuje konstruktor klasy nadrzędnej (Person) i przekazuje do niego argumenty 'name' i 'age'.
    this.isStudent = isStudent; // Inicjalizuje pole 'isStudent' obiektu klasy Student wartością przekazaną do konstruktora.
  }
}

let student1 = new Student("John", 20, true); // Tworzy nową instancję klasy Student o nazwie "John", wieku 20 lat i statusie studenta true.
let student2 = new Student("Alice", 22, true); // Tworzy nową instancję klasy Student o nazwie "Alice", wieku 22 lata i statusie studenta true.
