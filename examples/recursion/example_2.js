// 2. reverse a string

function revStr(str, index = 0, newString = "") {
  newString += str.charAt(str.length - index);
  return newString.length === str.length ? newString : revStr(str, index + 1, newString);
}

console.log(revStr('yvan eht nioj'));
