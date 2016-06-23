// 5.


function splitter(word, seperator, start = 0, end = 0, splits = []) {
  if (end === word.length) {
    splits.push(word.slice(start, end));
    return splits
  }
  if (word.charAt(end) === seperator) {
    splits.push(word.slice(start, end))
    start = end + 1
  }
  return splitter(word, seperator, start, end + 1, splits)
}

console.log(splitter("Split-Me--William", "-"));


var arr1 = [1, 2, 3, 16, 17];
var arr2 = [2, 13, 16, 18, 19, 20];

var mergeArray = function(arr1, arr2) {
 var megaArray = [];
 for(var i=0; i<arr1.length; i++) {
   for(var j=0; j<arr2.length; j++) {
     if (arr2[j] <= arr1[i]) {
       megaArray.push(arr2[j]);
       arr2.splice(0, 1);
     }
   }
   megaArray.push(arr1[i]);
 }
  if (arr2.length > 0){
    for (k = 0; k < arr2.length; k++){
      megaArray.push(arr2[k]);
    }
  }
 return megaArray;
};

console.log(mergeArray(arr1, arr2));
