/*
  Priority Queue:
  . Each element of the priority queue has an property associated with it.
  . Elements are added to the queue as per the priority.
  . Lowest priority elements are removed first

  Add elements to the queue according to the priority
  Remove them from the front of the queue
*/

class QElement {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }

  enQueue(data, priority) {
    var newElement = new QElement(data, priority);
    var flag = false;

    if (this.isEmpty()) {
      this.items.push(newElement);
    } else {
      for (let i = 0; i < this.items.length; i += 1) {
        // if current item i priority is greater than newElement arrived, add it or else keep iterating
        if (this.items[i].priority > newElement.priority) {
          // Removes elements from an array and, if necessary, enqueues new elements in their place, returning the deleted elements
          // i - stating index to remove, 0 - number of elements to remove, enqueue at the place i
          this.items.splice(i, 0, newElement);
          flag = 1;
          break;
        }
      }
      if (!flag) {
        // element has the highest priority, add it to the last
        this.items.push(newElement);
      }
    }
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

var pq = new PriorityQueue();

pq.enQueue("Morty", 4);
pq.enQueue("Rick", 3);
pq.enQueue("Dexter", 2);
pq.enQueue("Tom", 2);
pq.enQueue("Jerry", 1);

console.log('Priority Queue: ', pq.printQueue());

console.log('DeQueued ', pq.deQueue());
console.log('Priority Queue: ', pq.printQueue());

console.log('DeQueued ', pq.deQueue());
console.log('Priority Queue: ', pq.printQueue());

console.log('Front: ', pq.front());
console.log('Rear: ', pq.rear());
