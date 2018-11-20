function printSpiral(n = 1) {
  if (typeof n !== 'number' || n <= 0) {
    return "Invalid arguments supplied";
  }

  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }

  let counter = 1;
  let startRow = 0, endRow = n - 1, startCol = 0, endCol = n - 1;

  while (counter <= n*n) {
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = counter++;
    }
    startRow = startRow + 1;

    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endCol] = counter++;
    }
    endCol = endCol - 1;

    for (let i = endCol; i >= startCol; i--) {
      matrix[endRow][i] = counter++;
    }
    endRow = endRow - 1;

    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startCol] = counter++;
    }
    startCol = startCol + 1;
  }

  return matrix;
}

console.log("1: ", printSpiral(1));
console.log("2: ", printSpiral(2));
console.log("3: ", printSpiral(3));
console.log("4: ", printSpiral(4));
console.log("5: ", printSpiral(5));