class Queue {
  constructor() {
    this.items = [];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }

  enQueue(data) {
    this.items.push(data);
  }

  deQueue() {
    if (this.isEmpty()) {
      return "Underflow Yo: No Elements in the Queue";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "No Elements in the Queue";
    }
    return this.items[0];
  }

  rear() {
    if (this.isEmpty()) {
      return "No Elements in the Queue";
    }
    return this.items[this.items.length - 1];
  }

  printQueue() {
    if (this.isEmpty()) {
      return "No Elements in the Queue";
    }
    return this.items;
  }
}

var q = new Queue();

q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
q.enQueue(4);
q.enQueue(5);
console.log('Print All: ', q.printQueue());

console.log('DeQueue: ', q.deQueue());
console.log('DeQueue: ', q.deQueue());
console.log('DeQueue: ', q.deQueue());

console.log('Print All: ', q.printQueue());

console.log('Front: ', q.front());
console.log('Rear: ', q.rear());
