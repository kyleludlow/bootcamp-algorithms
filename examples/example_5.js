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
