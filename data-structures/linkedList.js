class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.head === null;
  }

  getSize() {
    return this.size;
  }

  insert(data) {
    var newNode = new Node(data);
    var current = null;

    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  insertAt(data, position) {
    if (position > 0 && position > this.size) {
      return null;
    }

    var newNode = new Node(data);
    var prev = null;
    var current = this.head;
    var index = 0;

    while(index < position) {
      index++;
      prev = current;
      current = current.next;
    }
    newNode.next = current;
    prev.next = newNode;
    this.size++;
  }

  remove(element) {
    if (this.isEmpty()) {
      return ("Empty Linked List");
    }
    var current = this.head;
    var prev = null;

    while (current != null) {
      if (current.data === element) {
        if (prev === null) {
          this.head = current.next; // First element
        } else {
          prev.next = current.next; // link elements
        }
        this.size--;
        return current.data;
      }
      prev = current;
      current = current.next;
    }

    return "Not Found";
  }

  removeAt(position) {
    if (this.isEmpty()) {
      return ("Empty Linked List");
    }

    if (position < 0 || position > this.size) {
      return "Invalid position given for delete";
    }
    
    var current = this.head;
    var prev = current; // set it to current
    var index = 0;

    if (index === position) {
      this.head = current.next;
      return current.data;
    } else {
      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }
      prev.next = current.next;
      this.size--;
      return current.data;
    }
  }

  printLinkedList() {
    if (this.isEmpty()) {
      return "Empty Linked List";
    } else {
      var str = "";
      var current = this.head;
      while (current != null) { // notice
        str += `${current.data} -> `;
        current = current.next;
      }
      return str;
    }
  }
}

var ll = new LinkedList();
ll.insert("Tom");
ll.insert("Jerry");
ll.insert("Rick");
ll.insert("Morty");
ll.insert("Dexter");
console.log('LinkedList: ', ll.printLinkedList());

ll.insertAt("Heha", 2);
console.log('LinkedList: ', ll.printLinkedList());

console.log('Remove Morty: ', ll.remove("Morty"));
console.log('LinkedList: ', ll.printLinkedList());

console.log('Remove at 0: ', ll.removeAt(0));
console.log('LinkedList: ', ll.printLinkedList());

console.log('Remove at 3: ', ll.removeAt(3));
console.log('LinkedList: ', ll.printLinkedList());
