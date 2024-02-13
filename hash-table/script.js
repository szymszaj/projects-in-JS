const hashFunction = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i); // Adding the ASCII code of each character in the string
  }
  return hash % max; // Returning the remainder of dividing the sum of ASCII codes by the maximum value
};

class HashTable {
  constructor() {
    this._storage = []; // Initializing an empty array to store data
    this._storageLimit = 4; // Setting the maximum limit for stored data
  }

  print() {
    console.log(this._storage); // Method to print the contents of the data storage array
  }

  add(key, value) {
    const index = hashFunction(key, this._storageLimit); // Calculating the index for storing the key-value pair
    if (this._storage[index] === undefined) {
      this._storage[index] = [[key, value]]; // Storing the key-value pair in a new bucket if the bucket is empty
    } else {
      for (let i = 0; i < this._storage[index].length; i++) {
        if (this._storage[index][i][0] === key) {
          this._storage[index][i][1] = value; // Updating the value if the key already exists in the bucket
          return;
        }
      }
      this._storage[index].push([key, value]); // Adding a new key-value pair to the bucket if the key doesn't exist
      if (this._storage.length > this._storageLimit * 0.75) {
        this.resize(); // Resizing the hash table when the number of elements exceeds 75% of the storage size
      }
    }
  }

  remove(key) {
    const index = hashFunction(key, this._storageLimit); // Calculating the index of the bucket containing the key
    if (this._storage[index] === undefined) return; // Returning if the bucket is empty

    for (let i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === key) {
        this._storage[index].splice(i, 1); // Removing the key-value pair from the bucket
        if (this._storage[index].length === 0) {
          delete this._storage[index]; // Deleting the bucket if it becomes empty after removal
        }
        return;
      }
    }
  }

  lookup(key) {
    const index = hashFunction(key, this._storageLimit); // Calculating the index of the bucket containing the key
    if (this._storage[index] === undefined) return undefined; // Returning undefined if the bucket is empty

    for (let i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === key) {
        return this._storage[index][i][1]; // Returning the value associated with the key
      }
    }
  }

  contains(key) {
    const index = hashFunction(key, this._storageLimit); // Calculating the index of the bucket containing the key
    if (this._storage[index] === undefined) return false; // Returning false if the bucket is empty

    for (let i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === key) {
        return true; // Returning true if the key is found in the bucket
      }
    }
    return false; // Returning false if the key is not found in the bucket
  }

  iterate(callback) {
    for (let i = 0; i < this._storage.length; i++) {
      if (this._storage[i] !== undefined) {
        for (let j = 0; j < this._storage[i].length; j++) {
          callback(this._storage[i][j][0], this._storage[i][j][1]); // Invoking the callback function for each key-value pair
        }
      }
    }
  }

  resize() {
    const oldStorage = this._storage;
    this._storageLimit *= 2; // Doubling the maximum limit of the hash table's capacity
    this._storage = [];

    oldStorage.forEach((bucket) => {
      if (bucket !== undefined) {
        bucket.forEach(([key, value]) => {
          this.add(key, value); // Rehashing each key-value pair with the new storage limit
        });
      }
    });
  }
}

console.log(hashFunction("quincy", 10)); // Testing the hash function with a sample string

const ht = new HashTable(); // Creating a new instance of the HashTable class
ht.add("beau", "person"); // Adding key-value pairs to the hash table
ht.add("fido", "dog");
ht.add("rex", "dinosaur");
ht.add("tux", "penguin");

ht.iterate((key, value) => { // Iterating through all key-value pairs in the hash table and printing them
  console.log(`Key: ${key}, Value: ${value}`);
});
