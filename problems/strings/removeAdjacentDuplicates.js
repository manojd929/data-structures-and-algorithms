function magic(str = '') {
  if (str.length <= 1) {
    return str;
  }

  let pos = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      pos++;
      continue;
    }

    if (pos > 0) {
      removeStr = str.slice(i - pos, i + 1);
      str = str.replace(removeStr, '');
      i -= pos + 1;
    }

    pos = 0;
  }

  return str;
}

console.log(magic("geeksForgeeks"));
console.log(magic("acaaabbbacdddd"));