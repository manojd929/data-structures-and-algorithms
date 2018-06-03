function bubbleSort(arr) {
  var len = arr.length;

  for(let i = 0; i <= len - 2; i++) {
    let flag = 0;
    for(let j = 0; j < len - (i + 1); j++) {
      if (arr[j] > arr[j+1]) {
        flag = 1;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (flag === 0) {
      break;
    }
  }

  return arr;
}

arr = [5, 4, 3, 2, 1];
console.log('Bubble Sort: ', bubbleSort(arr));
