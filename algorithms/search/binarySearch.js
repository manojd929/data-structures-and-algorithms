function binarySearch(arr = [], low = 0, high = 0, key) {
  if (high >= 1) {
    const mid = Math.floor((low + high) / 2);

    if (key === arr[mid]) {
      return "Element: " + key + " found at index: " + mid;
    }
  
    if (key < arr[mid]) {
      return binarySearch(arr, low, mid - 1, key);
    } else {
      return binarySearch(arr, mid + 1, high, key);
    }
  }

  return "Element: " + key + " Not found in array";
}

const arr1 = [1];
const arr2 = [0];
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
const arr4 = [0, 1, 2, 2, 2, 2, 2, 3];
const arr5 = [0, 1, 2, 2, 4, 2, 2, 2, 3];
const arr6 = [0, 1, 2, 2, 10, 2, 2, 2, 3];
const arr7 = [];

console.log("1: ", binarySearch(arr1, 0, arr1.length, 1));
console.log("2: ", binarySearch(arr2, 0, arr2.length,  -1));
console.log("3: ", binarySearch(arr3, 0, arr3.length,  7));
console.log("4: ", binarySearch(arr4, 0, arr4.length,  3));
console.log("5: ", binarySearch(arr5, 0, arr5.length,  4));
console.log("6: ", binarySearch(arr6, 0, arr6.length,  10));
console.log("7: ", binarySearch(arr7, 0, arr7.length,  9));
