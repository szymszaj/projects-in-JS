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

