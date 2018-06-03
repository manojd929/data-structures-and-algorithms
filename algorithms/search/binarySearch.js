function binarySearch(array = [], key) {

  const mid = Math.floor(array.length / 2);
  if (key === array[mid]) {
    return 'Found ' + array[mid];
  }
  
  if (key < array[mid] && array.length > 1) {
    return binarySearch(array.slice(0, mid), key);
  } else if (key > array[mid] && array.length > 1) {
    return binarySearch(array.slice(mid + 1, array.length), key);
  } else {
    return 'Not Found';
  }
}

console.log('Binary Search: 6 ', binarySearch([1, 2, 3, 4, 5, 6], 6));
console.log('Binary Search: 0 ', binarySearch([1, 2, 3, 4, 5], 0));
