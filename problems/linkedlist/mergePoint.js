/* Given two head pointers of a linked, find their merge point */

/*
Solution-1:
  Brute Force 
  m <- length of A
  n <- length of B

  O(m * n)

  Compare every node of A to every node of B, if they are same using two for loops
*/

/*
Solution-2:
  m <- length of A
  n <- length of B

  Create a set <Node *> of addresses
  insert all node's of B addresses into this set O(n * log n)

  Iterate over A and find if the address of node is present in this set O(m * log n)

  O(m log n + n log m)
*/

/*
Solution-3
 m <- length of A
 n <- length of B

 diff <- Math.abs(a - b)

 Move ahead by diff units in longest b/w A and B

 iterate over A and B, by one unit each if they are same
 o(n)
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function calcLength(node = null) {
  if (node === null) {
    return 0;
  }
  let len = 1;
  while (node.next !== null) {
    len += 1;
  }
  return len;
}

function calcDiffLength(aLen = 0, bLen = 0) {
  return Math.abs(aLen - bLen);
}

function findMergePoint(nodeA, nodeB) {
  let aLen = calcLength(nodeA);
  let bLen = calcLength(nodeB);

  let diff = calcDiffLength(aLen, bLen);
  let i = 0;

  if (aLen > bLen) {
    while (i < diff) {
      nodeA = nodeA.next;
    }
  } else {
    while (i < diff) {
      nodeB = nodeB.next;
    }
  }

  while(nodeA !== null || nodeB !== null) {
    if (nodeA === nodeB) {
      return nodeA.data;
    }
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }
}
