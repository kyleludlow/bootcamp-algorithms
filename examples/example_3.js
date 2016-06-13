//TODO: Take an array as input which contains an unknown set of numbers, and output an array which doubles the values of each item in that array. Test your solution by trying a handful of different arrays. Don't worry about error checking to make sure that the array you're given is valid input.

//
// var doubledArray = function (arr,  newArray = []){
//     if (arr.length === 0) {
//         return newArray;
//     }
//
//     var number = arr.splice(0, 1);
//     console.log(number);
//     if (number) {
//       var newNumber = number * 2;
//       newArray.push(newNumber);
//     }
//     return doubledArray(arr, newArray);
// };
//
// console.log(doubledArray([1,,2]))

//
var doubledArray = function (arr,  newArray = []){
    if (arr.length === 0) {
        return newArray;
    }
    var number = arr.splice(0, 1);
    if (number[0]) {
      newArray.push(number * 2);
    }
    return doubledArray(arr, newArray);
};

console.log(doubledArray([1,-2,,5]))
