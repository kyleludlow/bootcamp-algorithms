function madMultiplyer(ary, result = [], pos = 0) {
  var toTimes = [];

  ary.forEach((item, i) => {
    if (i !== pos) toTimes.push(item);
  });
  // [3,9,4]
  // result.push(toTimes.reduce((x, y) => {
  //   return x * y;
  // }));
  result.push(reducer(toTimes));
  return result.length === ary.length ? result : madMultiplyer(ary, result, pos + 1);
}

// [3,9,4]
// [3, 36]
// [108]
// []
function reducer(array) {
  let result = array[0];

  if (array.length > 1) {
    array[array.length - 2] *= array[array.length - 1];
    array.pop();

    result = reducer(array);
  }

  return result;
  //
}

console.log(madMultiplyer([2, 3, 9, 4]));
