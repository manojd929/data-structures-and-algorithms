function quickSort(arr) {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  
  let leftArr = [], rightArr = [];
  const pivot = arr[len - 1];
  for (let i = 0; i <= len - 2; i++) {
    arr[i] < pivot ? leftArr.push(arr[i]) : rightArr.push(arr[i]);
  }
  
  leftArr = quickSort(leftArr);
  rightArr = quickSort(rightArr);
  
  return [...leftArr, pivot, ...rightArr];
}

let arr = [5, 3, 4, 1, 2];
console.log('Quick Sort ', quickSort(arr));
