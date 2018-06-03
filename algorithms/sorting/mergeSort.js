function mergeSort(arr, low, high) {
  if (arr.length <= 1) {
    return arr;
  } else {
    let mid = arr.length / 2;
    let leftArr = mergeSort(arr.slice(0, mid));
    let rightArr = mergeSort(arr.slice(mid, arr.length));
    return merge(leftArr, rightArr);
  }
}

function merge(leftArr, rightArr) {
  let sortedArr = [];
  
  while(leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      sortedArr.push(leftArr[0])
      leftArr = leftArr.slice(1);
    } else {
      sortedArr.push(rightArr[0])
      rightArr = rightArr.slice(1);
    }
  }

  while(leftArr.length) {
    sortedArr.push(leftArr.shift())
  }

  while(rightArr.length) {
    sortedArr.push(rightArr.shift())
  }

  return sortedArr;
}

arr = [5, 4, 6, 3, 1, 2];
console.log('Merge Sort: ', mergeSort(arr));