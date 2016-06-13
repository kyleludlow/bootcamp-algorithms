// 1. Work out whether a number is even

function isEven(number) {
  return number < 0 ? isEven(-number) : number === 0 ? true : number === 1 ? false : isEven(number - 2);
};

console.log(isEven(-4));
