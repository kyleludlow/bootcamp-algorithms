function blankCheck(word, start, end, splits) {
  let str = word.slice(start, end)
  if (str) splits.push(str);
}

function splitter(word, separator, start = 0, end = 0, splits = []) {
  if (!separator) {
    separator = ' ';
  }
  if (end === word.length ) {
    blankCheck(word, start, end, splits);
    return splits;
  }
  if (word.substr(end, separator.length) === separator) {
    blankCheck(word, start, end, splits);
    start = end + separator.length
  }
  return splitter(word, separator, start, end + 1, splits)
}

console.log(splitter("Split---without-------empty--strings---", "-"));
console.log(splitter('gotmultiplecharsforya', 'multiplecharsfor'));
console.log(splitter('defaults to spaces for invalid separator', null));
