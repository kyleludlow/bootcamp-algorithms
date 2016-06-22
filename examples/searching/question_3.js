// Problem : Imagine you are looking for a book in a library with a Dewey Decimal index.
// How would you go about it? Can you express this process as a searching algorithm?

// Create arbitrary array of values...
let library = []
for (let i = 0; i <= 100; i++) {
  library.push({key: i, title: `Book ${i}`});
}

// DIVIDE AND CONQURE!!!!
function findMyBook(bookNumber, allBooks, count = 0) {
  if (bookNumber === allBooks[0].key) {
    return `Found "${allBooks[0].title}" in ${count} tries`;
  }
  let midSection = Math.floor(allBooks.length / 2);
  if (bookNumber === allBooks[midSection].key) {
    return `Found "${allBooks[midSection].title}" in ${count} tries`
  }
  else if (bookNumber < allBooks[midSection].key) {
    return findMyBook(bookNumber, allBooks.slice(0, midSection), count + 1);
  }
  else if (bookNumber > allBooks[midSection].key) {
    return findMyBook(bookNumber, allBooks.slice(midSection, allBooks.length), count + 1)
  }
}

console.log(findMyBook(7, library));
