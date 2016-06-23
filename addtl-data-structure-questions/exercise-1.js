//TODO:Write an algorithm which searches through a 2D array, and whenever it finds a zero should set the entire row and column to zero.

var matrix = [
    [2, 1, 1],
    [0, 7, 6],
    [2, 1, 4]
];
//             0,1,2
//             3,4,5
//             6,7,8
function zeroItOut(array) {
    for (var x = 0; x < array.length; x++) {
        if (array[x][0] === 0) {
            var xCoord = array[x][0];
            for (var y = 0; y < array.length; y++) {
                if (array[xCoord][y] == 0) {
                    array[xCoord][y] == 0;
                }
            }
        }
    }
    return array;
}

console.log(zeroItOut(matrix));
