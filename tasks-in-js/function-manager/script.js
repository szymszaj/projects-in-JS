class FunctionManager {
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
  getValueForFunction(name) {
    const func = this.functions[name];
    if (func) {
      return func();
    } else {
      return `Brak funkcji o nazwie ${name}`;
    }
  }
}

const functionManager = new FunctionManager();

functionManager.addFunction('function1', () => 'Wartość dla funkcji 1');
functionManager.addFunction('function2', () => 'Wartość dla funkcji 2');

// Przykłady użycia
console.log(functionManager.getValueForFunction('function1'));
console.log(functionManager.getValueForFunction('function2'));
console.log(functionManager.getValueForFunction('function3'));