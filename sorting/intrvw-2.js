//TODO: Write an algorithm to shuffle an array into a random order in-place (i.e. without creating a new array).

var sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function randomNumber(min,max){
    return Math.floor(Math.random()*min)

};

function randomizeArray() {
    var i;
    while (array.length - 1) {
        for (i = 0; i < array.length; i++) {
            //Math Random number
            //Math Round values

            if (array[i] > array[i+1]) {
            }
        } return array;
    }
}

var currentIndex = array[i];
array[i] = array[i+1];
array[i+1] = currentIndex;
