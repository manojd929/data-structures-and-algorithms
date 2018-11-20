// Given an array containing both negative and positive integers
// Find the contiguous subarray with maximum sum
// [1, 2 , 3] => 6
// [-1, -2 , -3, -4] => -1

function kadane(arr = []) {
  const len = arr.length;

  if (len <= 0) {
    return arr;
  }

  let globalMaxSum = arr[0], currMaxSum = arr[0];

  for (let i = 1; i < len; i++) {
    currMaxSum = Math.max(arr[i], currMaxSum + arr[i]);
    globalMaxSum = Math.max(currMaxSum, globalMaxSum);
  }

  return globalMaxSum;
}

console.log(kadane([1, 2, 4, 5, -8]));
console.log(kadane([-1, 4, 2, 3, 5]));

console.log(kadane([0, 0, -5, 6, -5]));
console.log(kadane([-9, -7, -1, -3, -5]));
