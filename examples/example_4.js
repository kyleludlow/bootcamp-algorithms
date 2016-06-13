function nth(number, result = 0, start = 0) {
    if (number === start) return result;
    start++;
    result += start;
    return nth(number, result, start);
}
console.log(nth(14));
