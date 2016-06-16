// Problem : Given an array of numbers, write an algorithm to find out the products of every number,
// except the one at that index. For example, if the input was [1, 3, 9, 4], the output should be
// [108, 36, 12, 27] (i.e. [3*9*4, 1*9*4, 1*3*4, 1*3*9]).

function madMultiplyer(ary, result = [], pos = 0) {
  var toTimes = [];

  ary.forEach((item, i) => {
    if (i !== pos) toTimes.push(item);
  });

  // I want to use reduce...but i guess that's cheating... :(
  // result.push(toTimes.reduce((x, y) => {
  //   return x * y;
  // }));

  // Therefore : recursive 'reducer' solution courtasy of Mr Rory the Mentor.
  result.push(reducer(toTimes));
  return result.length === ary.length ? result : madMultiplyer(ary, result, pos + 1);
}

function reducer(array) {
  let result = array[0];
  if (array.length > 1) {
    array[array.length - 2] *= array[array.length - 1];
    array.pop();
    result = reducer(array);
  }
  return result;
}

console.log(madMultiplyer([1, 3, 9, 4]));
