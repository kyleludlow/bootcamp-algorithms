// 1. Work out whether a number is even

var isEven = function(number){

  if (number < 0){
    number = number * -1;
  }

  if (number  === 0){
    return true;
  } else if (number === 1){
    return false;
  }

return isEven(number  - 2);
};


// USE THE (brute)FORCE
var isEven = function(number) {
  if (number % 2 === 0){
    return true
  }
  else {
    return false
  }
};
