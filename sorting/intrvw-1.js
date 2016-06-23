//TODO: Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are

var nums = [11, 2, 4, 9, 12, 6, 7, 1, 10, 8, 3];


function sort(array) {
    var i;
    while (array.length - 1) {
        for (i = 0; i < array.length; i++) {
            if (array[i] > array[i+1]) {
                var currentIndex = array[i];
                array[i] = array[i+1];
                array[i+1] = currentIndex;
            }
        } return array;
    }
}
console.log(sort(nums));

// for(var i = 0; i < 10; i++) {
//   console.log(i, i+1);
// }
//
// for(var i = 0, k = 1; i < 10; i++, k++) {
//   console.log(i, k);
// }

// var merge = function(left, right, array) {
//     var leftIndex = 0;
//     var rightIndex = 0;
//     var outputIndex = 0;
//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             array[outputIndex++] = left[leftIndex++];
//         }
//         else {
//             array[outputIndex++] = right[rightIndex++];
//         }
//     }

//     for (var i=leftIndex; i<left.length; i++) {
//         array[outputIndex++] = left[i];
//     }

//     for (var i=rightIndex; i<right.length; i++) {
//         array[outputIndex++] = right[i];
//     }
//     return array;
// };

// var mergeSort = function(array) {
//     if (array.length <= 1) {
//         return array;
//     }

//     var middle = Math.floor(array.length / 2);
//     var left = array.slice(0, middle);
//     var right = array.slice(middle, array.length);

//     left = mergeSort(left);
//     right = mergeSort(right);
//     return merge(left, right, array);
// };
