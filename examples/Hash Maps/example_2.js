// Problem : Write an algorithm to group a list of words into anagrams.
// For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'],
// the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].

var HashMap = require('./hashmaps');

var hashmap = new HashMap();

function isAnnaGraham(array, toCheck = 0, keyArray = []) {
  if (toCheck > array.length - 1) {
    return keyArray;
  }
  var key = 0;
  for (let i = 0; i < array[toCheck].length; i++) {
    key += array[toCheck].charCodeAt(i);
  }
  if (keyArray.length > 0) {
    let match = false;
    for (let j = 0; j < keyArray.length; j++) {
      if (keyArray[j].key === key) {
        keyArray[j].value.push(array[toCheck]);
        match = true;
        return isAnnaGraham(array, toCheck + 1, keyArray);
      }
    }
    if (!match) {
      keyArray.push({key: key, value: [array[toCheck]]});
      return isAnnaGraham(array, toCheck + 1, keyArray);
    }
  }
  else if (keyArray.length === 0) {
    keyArray.push({key: key, value: [array[toCheck]]});
    return isAnnaGraham(array, toCheck + 1, keyArray);
  }
}

console.log(isAnnaGraham(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race', 'cera', 'seats', 'aSets']));
