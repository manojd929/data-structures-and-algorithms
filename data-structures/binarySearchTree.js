/*
  A Binary Search tree is a binary tree in which nodes which have lesser value are stored on the left
  while the nodes with higher value are stored at the right.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    var newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(newNode, this.root);
    }
    console.log('Inserted: ', newNode.data);
  }

  
  insertNode(newNode, node) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(newNode, node.left);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(newNode, node.right);
      }
    }
  }
  
  remove(data) {
    // root is initialized with root of modified tree
    this.root = this.removeNode(data, this.root);
  }

  removeNode(data, node) {
    if (node == null) {
      console.log('Element Does not exist');
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(data, node.left);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(data, node.right);
      return node;
    } else {
      // deleting node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // Delete node with one children
      if (node.left === null) {
        node = node.right;
        return node;
      }
      if (node.right === null) {
        node = node.left;
        return node;
      }

      // Delete node with two children
      var minNode = this.findMinNode(node.right);
      node.data = minNode.data;
      node.right = this.removeNode(node.right, minNode.data);
      return node;
    }
  }

  inorder(node) {
    if (node != null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  preorder(node) {
    if (node != null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  postorder(node) {
    if (node != null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  getRootNode() {
    return this.root;
  }

  search(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }
} 

// create an object for the BinarySearchTree
var bst = new BinarySearchTree();
 
// Inserting nodes to the BinarySearchTree
bst.insert(15);
bst.insert(25);
bst.insert(10);
bst.insert(7);
bst.insert(22);
bst.insert(17);
bst.insert(13);
bst.insert(5);
bst.insert(9);
bst.insert(27);

console.log('Removing 17: ');
bst.remove(17);

var root = bst.getRootNode();
console.log('Inorder Traversal: ');
bst.inorder(root);
console.log('Preorder Traversal: ');
bst.preorder(root);
console.log('Postorder Traversal: ');
bst.postorder(root);

console.log('Minimum Node Data: ', bst.findMinNode(root));

console.log('Searching 5: ', bst.search(root, 5));
console.log('Searching 17: ', bst.search(root, 17));
