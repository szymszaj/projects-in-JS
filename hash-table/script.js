const hashFunction = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max; //Hash function - returns the remainder of the sum of character codes divided by the maximum limit
};

class HashTable {
  constructor() {
    this.storage = [];
    this.storageLimit = 4; // Maximum limit for storing data in the hash table
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
        if (this.storage.length > this.storageLimit * 0.75) {
          // Scaling up when the number of elements exceeds 75% of the storage size
          this.resize();
        }
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

  resize() {
    const oldStorage = this.storage;
    this.storageLimit *= 2; // Doubling the maximum limit of the hash table's capacity
    this.storage = [];

    oldStorage.forEach(bucket => {
      if (bucket !== undefined) {
        bucket.forEach(([key, value]) => {
          this.add(key, value);
        });
      }
    });
  }
}

console.log(hashFunction("quincy", 10));

const ht = new HashTable();
ht.add("beau", "person");
ht.add("fido", "dog");
ht.add("rex", "dinosaur");
ht.add("tux", "penguin");

ht.iterate((key, value) => {
  console.log(`Key: ${key}, Value: ${value}`);
});
