// Problem : Imagine you have an array of numbers. Write an algorithm to remove all numbers less than five from the array.

function arrayDestroyer(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 5) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
