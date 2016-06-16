// Problem : Imagine you have two arrays which have already been sorted.
// Write an algorithm to merge the two arrays into a single array, which should also be sorted.
// For example, if your input arrays were [1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10], your output
// array should be [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11].

var counter = 0;
function joinArrays(ary1, ary2, result = []) {
  counter++;
  if (ary1[0] >= ary2[0] || typeof ary1[0] === 'undefined') {
    result.push(ary2.shift());
  }
  else if (ary1[0] < ary2[0] || typeof ary2[0] === 'undefined') {
    result.push(ary1.shift());
  }
  return (ary1.length === 0 && ary2.length === 0) ? result : joinArrays(ary1, ary2, result);
}

var x = joinArrays([1, 3, 6, 8, 11, 12], [2, 3, 5, 8, 9, 10, 13]);

console.log(x)
console.log(counter); // O(n)
