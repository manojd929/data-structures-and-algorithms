// Given an unsorted array of size N non-negative integers
// Find a contiguous subarray with which adds to a given number

function magician(arr = [], result = 0) {
  let sum = arr[0];
  let minIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (sum === result) {
      return "True " + minIndex + " -> " + i;
    }

    sum += arr[i];
    
    while(sum > result) {
      sum -= arr[minIndex];
      minIndex++;
    }
  }

  return "Subarray not found";
}

console.log(magician([1, 2, 3, 7, 5], 12));
console.log(magician([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15));