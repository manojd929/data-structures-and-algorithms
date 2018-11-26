function search(arr = [], key) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === key) {
      return { arr, index: mid, key };
    }
    
    if (arr[mid] <= arr[high]) { // Right half is sorted
      if (key > arr[mid] && key <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else { // left half is sorted
      if (key < arr[mid] && key >= arr[low]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }

  return { arr, index: -1, key };
}

console.log(search([5, 6, 7, 8, 1, 2, 3], 7));
console.log(search([9, 1, 2, 3, 4], 9));
console.log(search([1, 2, 3, 4, 5], 5));
console.log(search([0, 0, 0, 0, 0], 1));