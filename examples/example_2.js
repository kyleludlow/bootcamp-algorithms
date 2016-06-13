// 2. reverse a string

function revStr(str, index = -1, newString = "") {
  if (newString.length === str.length) {
      return newString;
  }
  newString += str.slice(index).charAt(0);
  return revStr(str, index - 1, newString);
}

console.log(revStr('yvan eht nioj'));
