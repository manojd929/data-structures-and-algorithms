function pow(x = 1, n = 0) {
  if (typeof x !== 'number' || typeof n !== 'number' || n < 0) {
    return "Invalid input arguments supplied";
  }

  if (n === 0) {
    return 1;
  }

  if (n % 2 === 0) {
    let res = pow(x, n/2);
    return res * res;
  }

  return x * pow(x, n - 1);
}

console.log("Power of 3 raised to 3 : ", pow(3, 3));
console.log("Power of -3 raised to -2 : ", pow(-3, -2));
console.log("Power of 5 raised to 5 : ", pow(5, 5));
console.log("Power of 10 raised to 0 : ", pow(10, 0));
console.log("Power of -13 raised to 2 : ", pow(-13, 2));
console.log("Power of -14 raised to 3 : ", pow(-14, 3));

/* Time Complexity: O(Log n) */