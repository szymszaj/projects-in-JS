//allows you to add, remove and call functions, including passing arguments

class AdvancedFunctionManager {
  constructor() {
    this.functions = {};
  }

  addFunction(name, implementation) {
    if (typeof implementation === 'function') {
      this.functions[name] = implementation;
    } else {
      throw new Error('Nieprawidłowa implementacja funkcji.');
    }
  }

  removeFunction(name) {
    if (this.functions[name]) {
      delete this.functions[name];
      console.log(`Usunięto funkcję o nazwie ${name}`);
    } else {
      console.log(`Brak funkcji o nazwie ${name}`);
    }
  }

  getValueForFunction(name, ...args) {
    const func = this.functions[name];
    if (func) {
      return func(...args);
    } else {
      return `Brak funkcji o nazwie ${name}`;
    }
  }
}

const advancedFunctionManager = new AdvancedFunctionManager();

advancedFunctionManager.addFunction('function1', () => 'Wartość dla funkcji 1');
advancedFunctionManager.addFunction('function2', () => 'Wartość dla funkcji 2');

console.log(advancedFunctionManager.getValueForFunction('function1'));
console.log(advancedFunctionManager.getValueForFunction('function2'));

advancedFunctionManager.addFunction('addNumbers', (a, b) => `Suma: ${a + b}`);
console.log(advancedFunctionManager.getValueForFunction('addNumbers', 3, 5));

advancedFunctionManager.removeFunction('function1');
console.log(advancedFunctionManager.getValueForFunction('function1'));