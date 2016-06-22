// Problem : Write an O(n) algorithm to sort an array of integers,
// where you know in advance what the lowest and highest values are.

let unsorted = [5,4,8,2,3,1,9,7,6];
let sorted = [1,2,3,4,5,6,7,8,9];

function onSearch(array, final = array.length, count = 0, looped = 0) {
  let swaps = 0;
  for (let i = 0; i < final; i++) {
    looped += 1
    // if a[i] > a[i + 1] .... swap ... swap count + 1
    if (array[i] > array[i + 1]) {
      let tmp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = tmp;
      swaps += 1
    }
  }
  // if swaps ... loop to increase index by 1 ... last position is sorted, no need to check again
  // base if swaps = 0 ... return
  if (swaps === 0) {
    return `Here's the array: ${array} and the function was called ${count} time(s). Yet I looped over the array ${looped} times`;
  }
  else {
    return onSearch(array, final = final - 1, count + 1, looped);
  }
}

console.log(onSearch(unsorted));
