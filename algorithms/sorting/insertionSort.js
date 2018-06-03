function insertionSort(arr) {
  let len = arr.length;

  for (let i = 1; i <= len - 1; i++) {
    let value = arr[i];
    let position = i;
    while(position > 0 && arr[position - 1] > value) {
      arr[position] = arr[position - 1];
      position--;
    }
    arr[position] = value;
  }
  return arr;
}

arr = [5, 4, 1, 3, 2];
console.log('Insertion Sort: ', insertionSort(arr));
