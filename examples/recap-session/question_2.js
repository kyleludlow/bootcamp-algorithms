// Problem : You are given an array containing positive and negative integers.
// Write an algorithm which will find the largest sum in a continuous sequence.
let sequence = [-2,4,5,-1,98,-2,-20,11,-2,9,91];

function bestSum(array) {
  let best = 0;
  let sum = 0;
  for (number of array) {
    sum += number;
    if (sum > best) {
      best = sum;
    }
    else if (sum < 0) {
      sum = 0;
    }
  }
  return best;
}

console.log(bestSum(sequence));
