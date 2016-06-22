// Problem : Write an algorithm to shuffle an array into a
// random order in-place (i.e. without creating a new array).

function randomSort(array) {
  for (let i = 0; i < array.length; i++) {
    let swapsies = Math.floor(Math.random() * 4) + 1;
    if (swapsies % 2 === 0) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
  return array;
}

console.log(randomSort([1,2,3,4,5,6,7,8,9]));
