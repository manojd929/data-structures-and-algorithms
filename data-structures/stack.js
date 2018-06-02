class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(data) {
    this.items.push(data);
  }

  pop() {
    if (this.isEmpty()) {
      return "Empty Stack";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  printStack() {
    console.log('Print Stack: ', this.items);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

stack.printStack();

console.log('Peek: ', stack.peek());

console.log('Pop: ', stack.pop());
console.log('Pop: ', stack.pop());
console.log('Pop: ', stack.pop());

stack.printStack();

console.log('Peek: ', stack.peek());
