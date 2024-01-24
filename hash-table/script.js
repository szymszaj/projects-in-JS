const hashFunction = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

class HashTable {
  constructor() {
    this.storage = [];
    this.storageLimit = 4;
  }

  print() {
    console.log(this.storage);
  }

  add(key, value) {
    const index = hashFunction(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (!inserted) {
        this.storage[index].push([key, value]);
      }
    }
  }

  remove(key) {
    const index = hashFunction(key, this.storageLimit);
    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index];
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i];
        }
      }
    }
  }

  lookup(key) {
    const index = hashFunction(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  }

  iterate(callback) {
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i] !== undefined) {
        for (let j = 0; j < this.storage[i].length; j++) {
          callback(this.storage[i][j][0], this.storage[i][j][1]);
        }
      }
    }
  }
}

console.log(hashFunction("quincy", 10));

const ht = new HashTable();
ht.add("beau", "person");
ht.add("fido", "dog");
ht.add("rex", "dinosaur");
ht.add("tux", "penguin");

// Now, let's iterate through the hash table and print each key-value pair
ht.iterate((key, value) => {
  console.log(`Key: ${key}, Value: ${value}`);
});
