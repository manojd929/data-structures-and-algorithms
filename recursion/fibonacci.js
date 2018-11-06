function fibonacci(n = 1) {
  if (typeof n !== 'number' || n < 0) {
    return "Invalid input arguments supplied"
  }

  if (n <= 1) {
    return n;
  }

  return fibonacci(n-1) + fibonacci(n-2);
}

console.log("Fibonacci of 5: ", fibonacci(5));
console.log("Fibonacci of -5: ", fibonacci(-5));
console.log("Fibonacci of 10: ", fibonacci(10));
console.log("Fibonacci of 15: ", fibonacci(15));
console.log("Fibonacci of 3: ", fibonacci(3));

/* Need memoization to avoid duplicate computations */