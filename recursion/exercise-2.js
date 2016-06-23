//TODO: Take an array as input which contains an unknown set of numbers, and output an array which doubles the values of each item in that array. Test your solution by trying a handful of different arrays. Don't worry about error checking to make sure that the array you're given is valid input.

let arr = [1, 2, 3, 4, 5];

function arrayDoubler(array) {
    if (array.length <= 0) {
        return array;
    } else {
        var i = 0;
        for (i = 0; i < array.length; i++) {
            array[i] * 2;
        }
    } return array;
}
console.log(arrayDoubler(arr));
