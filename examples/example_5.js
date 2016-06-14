function blankCheck(word, start, end, splits) {
  let str = word.slice(start, end)
  if (str) splits.push(str);
}

function splitter(word, seperator, start = 0, end = 0, splits = []) {
  if (!seperator) {
    seperator = ' ';
  }
  if (end === word.length ) {
    blankCheck(word, start, end, splits);
    return splits;
  }
  if (word.substr(end, seperator.length) === seperator) {
    blankCheck(word, start, end, splits);
    start = end + seperator.length
  }
  return splitter(word, seperator, start, end + 1, splits)
}

console.log(splitter("Split---without-------empty--strings---", "-"));
console.log(splitter('gotmultiplecharsforya', 'multiplecharsfor'));
console.log(splitter('defaults to spaces for invalid seperator', null));
