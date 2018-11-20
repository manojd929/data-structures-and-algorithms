function reverseWords(str = '') {
  if (str.length <= 1) {
    return str;
  }

  return str.split(' ').reverse().join(' ');
}

console.log(reverseWords("i like this program"));
console.log(reverseWords("mno pqr stu"));