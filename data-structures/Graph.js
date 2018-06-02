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
}

class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    // set key as vertex and value as empty list
    this.adjacencyList.set(vertex, []);
    this.noOfVertices++;
  }

  addEdge(srcVertex, destVertex) {
    // get the list for srcVertex and add destVertex denoting edge between the two
    this.adjacencyList.get(srcVertex).push(destVertex);

    // undirected graph. so add both ways
    this.adjacencyList.get(destVertex).push(srcVertex);
  }

  printGraph() {
    if (this.noOfVertices === 0) {
      return "Empty Graph";
    }
    let allVertex = this.adjacencyList.keys();

    for (let vertex of allVertex) {
      let getValues = this.adjacencyList.get(vertex);
      let c = '';
      for (let value of getValues) {
        c = c + value + ' ';
      }
      console.log(`Vertex: ${vertex} -> ${c}`);
    }
  }

  breadthFirstTraversal(staringVertex) {
    let visited = [];
    for(let i = 0; i < this.noOfVertices; i += 1) {
      visited[i] = false;
    }

    var queue = new Queue();
    visited[staringVertex] = true;
    queue.enQueue(staringVertex);

    while(!queue.isEmpty()) {
      let getQueueElement = queue.deQueue();
      console.log(getQueueElement);

      let getList = this.adjacencyList.get(getQueueElement);

      for (let vertex in getList) {
        var node = getList[vertex];

        if (!visited[node]) {
          visited[node] = true;
          queue.enQueue(node);
        }
      }
    }
  }

  depthFirstTraversal(startingVertex) {
    let visited = [];
    for (let i = 0; i < this.noOfVertices; i++) {
      visited[i] = false;
    }

    this.DFSUtil(startingVertex, visited);
  }

  DFSUtil(vertex, visited) {
    visited[vertex] = true;
    console.log(vertex);

    let getList = this.adjacencyList.get(vertex);

    for (let vertex in getList) {
      let getElement = getList[vertex];
      if (!visited[getElement]) {
        this.DFSUtil(getElement, visited);
      }
    }
  }
}

const graph = new Graph();
let vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

for (let i = 0; i < vertices.length; i += 1) {
  graph.addVertex(vertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('E', 'C');
graph.addEdge('C', 'F');

console.log('Printing Graph: ');
graph.printGraph()

console.log('BST: ');
graph.breadthFirstTraversal('B');

console.log('DFS: ');
graph.depthFirstTraversal('B');
