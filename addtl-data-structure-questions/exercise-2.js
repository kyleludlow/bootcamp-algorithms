//TODO: You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

//

var rayray = [50,-2,100];

var counter = 0;

function largestSum(array) {
    var sum = 0;
    var maxSum = 0;
    for (var i = 0; i <= array.length; i++) {
        counter++;
        sum += array[i];
        //TODO: WHY DOES IT NOT MATH?
        console.log('This sum is' + sum);
        if (maxSum < sum) {
            maxSum = sum;
        } else if (sum < 0) {
            sum = 0;
        }
    }
    return maxSum;
}
console.log(largestSum(rayray));
console.log('the counter is now', counter);
//1 -5 + 7
//-5 + 7 - 8
//7 - 8
