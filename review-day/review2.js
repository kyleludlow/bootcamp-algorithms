// You are given an array containing positive and negative integers.
// Write an algorithm which will find the largest sum in a continuous sequence.


let exampleArray = [-1, 5, -2, 6, 2, 1, -10];


let newArray = [-2,4,5,6,-20,11,1];

// O(n^2)

let findGreatestSum = function(arr){
  let maxSum = -Infinity;

  for (let i = 0; i < arr.length; i++){
    let tempSum = 0;
    for (let j = i; j < arr.length; j++){
        tempSum += arr[j];
        maxSum = Math.max(maxSum, tempSum);
      }
    }
    return maxSum;
  };



// Striving for that O(n)

  let findGreatestSumAgain = function(arr){
    let maxSum = -Infinity;
    let tempSum = - Infinity;
    for (let i = 0; i < arr.length; i++){

          if (tempSum += arr[j] > tempSum){
            tempSum += arr[j];
          }
          maxSum = Math.max(maxSum, tempSum);

      }
      return maxSum;
    };


// console.log(findGreatestSum(exampleArray));
console.log(findGreatestSum(newArray));
