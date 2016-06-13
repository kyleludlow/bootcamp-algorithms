// Exercise 4: Calculates the nth triangular number.

function nthTri(number, result = 0, start = 0) {
  return number === 0 ? number : number === start ? result : nthTri(number, (result += start + 1), start + 1);
}

console.log(nthTri(0));
console.log(nthTri(1));
console.log(nthTri(2));
console.log(nthTri(3));
console.log(nthTri(4));
console.log(nthTri(5));
