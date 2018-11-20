function magic(str = '') {
  if (str.length <= 1) {
    return str;
  }

  let strMap = {};
  for (let s of str) {
    strMap[s] = 1;
  }

  return Object.keys(strMap).join('');
}

console.log(magic("geeksForgeeks"));