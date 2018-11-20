function atoi(str = '') {
  if (str.length <= 1) {
    return str;
  }

  return Number(str) || -1;
}

console.log(atoi("123"));
console.log(atoi("21a"));
console.log(atoi("ab"));