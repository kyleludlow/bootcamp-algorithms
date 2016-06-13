// Exercise 4: Calculates the nth triangular number.

function nth(number, result = 0, start = 0) {
    if (number === start) return result;
    start++;
    result += start;
    return nth(number, result, start);
}
console.log(nth(3));
