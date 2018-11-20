function sort012(arr = []) {
  let low = 0, mid = 0, high = arr.length - 1;
  const pivot = 1;

  if (arr.length === 1) {
    return arr;
  }

  while (mid <= high) {
    if (arr[mid] < pivot) {
      swap(arr, low, mid);
      low++;
      mid++;
    } else if (arr[mid] === pivot) {
      mid++;
    } else if (arr[mid] > pivot) {
      swap(arr, mid, high);
      high--;
    }
  }

  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr1 = [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 1, 1, 1, 1];
const arr2 = [1, 0, 2];
const arr3 = [2, 1, 0];

console.log("1: ", sort012(arr1));
console.log("2: ", sort012(arr2));
console.log("3: ", sort012(arr3));
