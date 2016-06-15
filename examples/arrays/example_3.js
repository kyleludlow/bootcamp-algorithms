function madMultiplyer(ary, result = [], pos = 0) {
  var toTimes = [];

  ary.forEach((item, i) => {
    if (i !== pos) toTimes.push(item);
  });
  result.push(toTimes.reduce((x, y) => {
    return x * y;
  }));
  return result.length === ary.length ? result : madMultiplyer(ary, result, pos + 1);
}

console.log(madMultiplyer([1, 3, 9, 4]));
