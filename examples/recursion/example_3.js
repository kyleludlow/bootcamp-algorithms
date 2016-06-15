//TODO: Take an array as input which contains an unknown set of numbers,
// and output an array which doubles the values of each item in that array.
// Test your solution by trying a handful of different arrays. Don't worry about
// error checking to make sure that the array you're given is valid input.

var doubledArray = function (arr,  newArray = []) {
    let number = arr.splice(0, 1);
    number[0] ? newArray.push(number * 2) : null;
    return arr.length ? doubledArray(arr, newArray) : newArray;
};

console.log(doubledArray([1,-2,,5]))
