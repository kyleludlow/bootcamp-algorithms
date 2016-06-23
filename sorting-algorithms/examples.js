// Write an O(n) algorithm to sort an array of integers, where you know
//  in advance what the lowest and highest values are.


var exampleArray = [4, 1, 2, 6, 5, 3, 9, 7];


var sortIntegers = function(arr, high, low){

  var newArr = [];
  indexCounter = 1;
  for (var i = 0; i < arr.length; i++){
    if (arr[i] < high && arr[i] !== low){
      if(arr[i] < arr[0]){
        newArr.unshift(arr[i]);
      } else {
        newArr.push(arr[i]);

      }
    }
  }
  newArr.unshift(low);
  newArr.push(high);
  return newArr;
}


// console.log(sortIntegers(exampleArray, 9, 1));

var library = ['simon', 'connie', 'keyside', 'simcity', 'cardinals', 'krayside'];

function sort(array, bucketSize) {
  if (array.length === 0) {
    return array;
  }

  // Determine minimum and maximum values
  var i;
  var minValue = array[0];
  var maxValue = array[0];
  for (i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }

  // Initialise buckets
  var DEFAULT_BUCKET_SIZE = 5;
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var buckets = new Array(bucketCount);
  for (i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  // Distribute input array values into buckets
  for (i = 0; i < array.length; i++) {
    buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
  }

  // Sort buckets and place back into input array
  array.length = 0;
  for (i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]);
    for (var j = 0; j < buckets[i].length; j++) {
      array.push(buckets[i][j]);
    }
  }

  return array;
}

sort(library, 2);
