// How many times is sorted array rotated ?


// Number of rotations = index of minimum element while traversing

// And for that element, both prev and next are greater than itself

function countRotation(arr = []) {
  if (arr.length <= 1) {
    return { arr, count: 0 };
  }

  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    console.log(low, mid, high, arr);

    if (arr[mid] >= arr[low] && arr[mid] <= arr[high]) {
      return { arr, count: mid };
    }

    if (arr[mid] <= arr[high]) {
      high = mid - 1;
    } else if (arr[mid] >= arr[low]) {
      low = mid + 1;
    }
  }

  return { arr, count: - 1};
}

// console.log(countRotation([5, 6, 7, 8, 1, 2, 3, 4]));
// console.log(countRotation([9, 1, 2, 3, 4, 5]));
// console.log(countRotation([0, 1, 2, 3]));
console.log(countRotation([3, 2, 1, 0]));