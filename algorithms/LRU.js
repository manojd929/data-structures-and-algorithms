class Node {
  constructor(key, value, next = null, prev = null) {
    this.key = key;
    this.value = value;

    this.next = next;
    this.prev = prev;
  }
}

class LRU {
  constructor(limit) {
    this.limit = limit;
    this.size = 0;

    this.head = null;
    this.tail = null;

    this.cache = {};
  }

  ensureLimit() {
    if (this.size >= this.limit) {
      this.remove(this.tail);
    }
  }

  insert(key, value) {
    this.ensureLimit();

    
    if(!this.head) {
      this.head = this.tail = new Node(key, value);
    } else {
      const node = new Node(key, value, this.head);
      this.head.prev = node;
      this.head = node;
    }
    
    this.cache[key] = node;
    this.size++;
  }

  get(key) {
    const result = this.cache[key];
    if (result) {
      this.remove(result.key);
      this.insert(result.key, result.value);
      return result;
    }

    return "Not found";
  }

  remove(key) {
    const node = this.get(key);
    if (!node.value) {
      return "Not found";
    }

    if (node.prev === null) {
      this.head = node.next;
    } else {
      node.prev.next = node.next;
    }

    if (node.next === null) {
      this.tail = node.prev;
    } else {
      node.next.prev = node.prev;
    }

    delete this.cache[key];
    this.size--;
  }

  clear() {
    this.size = 0;
    this.cache = {};
    this.head = null;
    this.tail = null;
  }
}
