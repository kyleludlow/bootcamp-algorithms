// Write an algorithm which searches through a 2D array, and whenever it finds a zero should set the entire row and column to zero.


let twoDeeArray = [[1,1,1],
                   [1,1,1],
                   [1,1,0]];



// if only 3 rows are allowed

var layWaste = function(arr){
let k = 0;
let checker1 = 0;
let checker2 = 0;
let checker3 = 0;
  for (let i = 0; i<arr.length; i++){
    if (arr[k][i] === 0){
      arr[k + 1][i] = 0;
      arr[k + 2][i] = 0;
      console.log(here);
      checker1 += 1;
    }
    else if (arr[k+1][i] === 0 ){
      arr[k ][i] = 0;
      arr[k + 2][i] = 0;
      checker2 += 1;
    }
    else if (arr[k+2][i] === 0 ){
      arr[k][i] = 0;
      arr[k + 1][i] = 0;
      checker3 += 1;
    }
  }
  if (checker1 > 0){
    for (let j = 0; j<arr.length; j++){
      arr[k][j] = 0;
    }
  }
  if (checker2 > 0){
    for (let j = 0; j<arr.length; j++){
      arr[k+1][j] = 0;
    }
  }
  if (checker3 > 0){
    for (let j = 0; j<arr.length; j++){
      arr[k+2][j] = 0;
    }
  }
  return arr;
};


console.log(layWaste(twoDeeArray));
