//TODO:Take an integers as and input, and return a boolean indicating whether the value is even or odd.

function isEven(number) {
    if (number < 0) {
        number = number * -1;
    }
    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    }
    return isEven(number - 2);
};

console.log(isEven(5));
