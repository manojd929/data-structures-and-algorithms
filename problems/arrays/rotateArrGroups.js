function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

function rotate(arr = [], jump = 0) {
  const len = arr.length;
  if (len <= 1) {
    return arr;
  }

  let i = 0;
  for (i = 0; i < len; i += jump) {
    let left = i;
    let right = Math.min(i + jump - 1, len - 1);

    while(left < right) {
      swap(arr, left++, right--)
    }
  }
  return arr;
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const arr3 = [1, 2];
const arr4 = [1];
const arr5 = [];

console.log("1: ", rotate(arr1, 3));
console.log("2: ", rotate(arr2, 2));
console.log("3: ", rotate(arr3, 2));
console.log("4: ", rotate(arr4, 1));
console.log("5: ", rotate(arr5, 2));