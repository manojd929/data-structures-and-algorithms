function reversePrintLL(node) {
  if (node === null) {
    return;
  } 
  reverseLL(node.next);
  console.log(node.data);
}
