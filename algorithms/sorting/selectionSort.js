function selectionSort(arr) {
   let len = arr.length;

   for(let i = 0; i <= len - 1; i++) {
     let minIndex = i;

     for (let j = i + 1; j <= len - 1; j++) {
       if (arr[j] < arr[minIndex]) {
         minIndex = j;
       }
     }

     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
   }
   return arr;
}

arr = [5, 4, 3, 2, 1];
console.log('Selection Sort: ', selectionSort(arr));
