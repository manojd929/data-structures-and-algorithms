function linearSearch(array, key) {
  for (element of array) {
    if (element === key) {
      return 'Found ' + element;
    }
  }
  return 'Not Found';
}

console.log('Linear Search: 2 ', linearSearch([5, 4, 3, 2, 1], 2));
console.log('Linear Search: 6 ', linearSearch([5, 4, 3, 2, 1], 6));
