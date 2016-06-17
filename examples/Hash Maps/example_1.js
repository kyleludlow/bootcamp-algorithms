// Problem : Write an algorithm to check whether any permutation of a string is a palindrome
// (a string which reads the same forwards and backwards). For example, "madam", "amadm" and "cllci"
// should all return true, whereas "caabl" and "aaxxis" should return false.

var HashMap = require('./hashmaps');

var hashmap = new HashMap();


function isMichaelPalin(string) {
  for (let i = 0; i < string.length; i++) {
    hashmap.set(string[i].toLowerCase(), string[i]);
  }
  let values = [];
  for (let i = 0; i <= hashmap._slots.length; i++) {
    if (typeof hashmap._slots[i] !== 'undefined') {
      values.push(hashmap._slots[i].value);
    }
  }
  return values.length === Math.ceil(string.length / 2) ?  true : false;
}

console.log(isMichaelPalin('Anna'));
