function findCount(arr = [], key) {
  const first = findFirst(arr, key);
  const last = findLast(arr, key);
  return (last - first) + 1;
}

function findFirst(arr = [], key) {
  let low = 0;
  let high = arr.length - 1;

  let result = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === key) {
      result = mid;
      high = mid - 1;
    } else if (arr[mid] < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
}

function findLast(arr = [], key) {
  let low = 0;
  let high = arr.length - 1;

  let result = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === key) {
      result = mid;
      low = mid + 1; // Haha
    } else if (arr[mid] < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
}
// Initializting result to -1 is important here, as result might be NaN if not initialized

console.log(findCount([5, 5, 5, 5, 5, 1, 2, 3, 4], 5));
console.log(findCount([5, 5, 5, 5, 5, 1, 2, 3, 4], 1));
console.log(findCount([5, 5, 5, 5, 5, 1, 2, 3, 4], 2));
console.log(findCount([5, 5, 5, 5, 5, 1, 2, 3, 4], 3));