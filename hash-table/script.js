const hashFunction = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

class HashTable {
  constructor() {
    this._storage = [];
    this._storageLimit = 4;
  }

  print() {
    console.log(this._storage);
  }

  add(key, value) {
    const index = hashFunction(key, this._storageLimit);
    if (this._storage[index] === undefined) {
      this._storage[index] = [[key, value]];
    } else {
      for (let i = 0; i < this._storage[index].length; i++) {
        if (this._storage[index][i][0] === key) {
          this._storage[index][i][1] = value;
          return;
        }
      }
      this._storage[index].push([key, value]);
      if (this._storage.length > this._storageLimit * 0.75) {
        this.resize();
      }
    }
  }

  remove(key) {
    const index = hashFunction(key, this._storageLimit);
    if (this._storage[index] === undefined) return;

    for (let i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === key) {
        this._storage[index].splice(i, 1);
        if (this._storage[index].length === 0) {
          delete this._storage[index];
        }
        return;
      }
    }
  }

  lookup(key) {
    const index = hashFunction(key, this._storageLimit);
    if (this._storage[index] === undefined) return undefined;

    for (let i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === key) {
        return this._storage[index][i][1];
      }
    }
  }

  contains(key) {
    const index = hashFunction(key, this._storageLimit);
    if (this._storage[index] === undefined) return false;

    for (let i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === key) {
        return true;
      }
    }
    return false;
  }

  iterate(callback) {
    for (let i = 0; i < this._storage.length; i++) {
      if (this._storage[i] !== undefined) {
        for (let j = 0; j < this._storage[i].length; j++) {
          callback(this._storage[i][j][0], this._storage[i][j][1]);
        }
      }
    }
  }

  resize() {
    const oldStorage = this._storage;
    this._storageLimit *= 2;
    this._storage = [];

    oldStorage.forEach((bucket) => {
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
