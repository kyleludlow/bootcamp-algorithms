let splits = [];

function blankCheck(word, start, end) {
  let str = word.slice(start, end)
  if (str) splits.push(str);
}

function splitter(word, seperator, start = 0, end = 0) {
  if (end === word.length) {
    blankCheck(word, start, end);
    return splits;
  }
  if (word.charAt(end) === seperator) {
    blankCheck(word, start, end);
    start = end + 1
  }
  return splitter(word, seperator, start, end + 1)
}

console.log(splitter("Split-me---without-------empty--strings---", "-"));
