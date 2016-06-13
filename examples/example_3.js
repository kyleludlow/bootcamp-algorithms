//TODO: Take an array as input which contains an unknown set of numbers, and output an array which doubles the values of each item in that array. Test your solution by trying a handful of different arrays. Don't worry about error checking to make sure that the array you're given is valid input.


var doubledArray = function (arr,  newArray){

    if (arr.length === 0) {
        return newArray;
    }

    number = arr.splice(0, 1);
    newNumber = number * 2;
    var newArray = newArray || [];

    newArray.push(newNumber);

    return doubledArray(arr, newArray);
    

};
