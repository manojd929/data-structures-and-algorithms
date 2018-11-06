/*
  Heap is a tree like data structure

  Depending on the order of the nodes
  Two types of Heap:
    1. Max Heap - Parent node value is GREATER than it's children
    2. Min Heap - Parent node value is LESSER than it's children

  At the bottom level, The level gets populated left to right

  Binary Heap
    Each Parent can have no more than two children
  
  Heap is useful and efficient to store and look up data that must maintain order

  Priority Queue:
    insertion: O(n)
    remove   : O(1)
  what if we want to optimize insertion to O(log n)

  we can use Binary Heap as it maintains order of data also with efficiency of tree

  If a given node is located at 'x' in array
  then,
      Left child exists at '2x'
      Right Child exists at '2x + 1'
      Its Parent exists at 'X'
  
  Priority of the node that gets inserted cannot be greater than its parent
  Every level of the heap must be full, except the lowest level which fills left to right


*/
class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.next = null;
  }
}

class PriorityQueue {
  constructor() {
    this.heap = [null];
  }

  /*
    Add a newNode at the end of heap array
    Adjust heap array in order to obey the rules
    since we know where every node's parent is
    Check child nodes priority with its parent and swapping them if required

    We continue to do this until the parent node has a lower priority than the child,
    or we run out of parent nodes
    in which case the new node takes over the highest level of the heap

    since we are visiting levels not nodes O(log n)
  */
  insert(data, priority) {
    const newNode = new Node(data, priority);
    this.heap.push(newNode);
    let currentNodeIndex = this.heap.length - 1;
    let currentNodeParentIndex = Math.floor(currentNodeIndex/2);

    while (this.heap[currentNodeParentIndex] && newNode.priority > this.heap[currentNodeParentIndex].priority) {
      const parent = this.heap[currentNodeParentIndex];
      this.heap[currentNodeParentIndex] = newNode;
      this.heap[currentNodeIndex] = parent;
      
      currentNodeIndex = currentNodeParentIndex;
      currentNodeParentIndex = Math.floor(currentNodeIndex/2);
    }
  }

  remove() {
    if (this.heap.length <= 2) {
      const toReturn = this.heap.pop();
      this.heap[0] = null;
      return toReturn;
    }

    const toRemove = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let [left, right] = [2 * currentIndex, 2 * currentIndex + 1];

    let currentChildIndex = this.heap[right] &&
                            this.heap[right].priority >= this.heap[left].priority ?
                            right : left;

    while(this.heap[currentChildIndex] && this.heap[currentIndex].priority <= this.heap[currentChildIndex].priority) {
      let currentNode = this.heap[currentIdx]
      let currentChildNode = this.heap[currentChildIdx];
      this.heap[currentChildIdx] = currentNode;
      this.heap[currentIdx] = currentChildNode;
    }

    return toRemove;
  }

  printHeap() {
    if (this.heap.length <= 1) {
      return 'Empty Heap';
    }
    return this.heap;
  }
}

const bh = new PriorityQueue();
bh.insert(1, 1);
bh.insert(2, 1);
bh.insert(3, 1);
bh.insert(4, 1);
bh.insert(5, 1);
bh.insert(6, 1);


console.log('Heap: ', bh.printHeap());