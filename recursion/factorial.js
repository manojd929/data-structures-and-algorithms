function factorial (n = 0) {
  if (typeof n != "number" || n < 0) {
    return 'invalid input';
  }

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log('Factorial of -2', factorial(-2));
console.log('Factorial of obj {} ', factorial({}));
console.log('Factorial of 0', factorial(0));
console.log('Factorial of 1', factorial(1));
console.log('Factorial of 5', factorial(5));
console.log('Factorial of 10', factorial(10));
