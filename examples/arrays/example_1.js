function arrayDestroyer(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 5) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
