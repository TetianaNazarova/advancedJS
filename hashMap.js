class HashMap {
  constructor(size = 10) {
    this.size = size;
    this.slots = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < hash.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % this.slots.length;
  }

  set(key, value) {
    const address = this._hash(key);

    if (!this.slots[address]) {
      this.slots[address] = [];
    }

    this.slots[address].push([key, value]);
  }

  get(key) {
    const address = this._hash(key);

    if (!this.slots[address]) {
      return null;
    }

    for (let i = 0; i < this.slots[address].length; i++) {
      const pair = this.slots[address][i];

      if (pair[0] === key) {
        return pair[1];
      }
    }
    return null;
  }
}

const hashTable = new HashMap(5);

hashTable.set("John", 90);
hashTable.set("Alice", 95);
hashTable.set("Bob", 87);
hashTable.set("Tanya", 60);