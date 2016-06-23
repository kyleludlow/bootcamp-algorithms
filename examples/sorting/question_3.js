// Problem : Imagine that I gave you twenty books to sort in alphabetical order.
// How would you go about it? Can you express this as an algorithm?

let library = ["Antilopes", "Batman", "Anon", "Cannon", "Bubble", "Bible", "A", "B"];

// BUBBLE!!!!
// function sortBooks(books) {
//   let swapsies = 0
//   for (let i = 0; i < books.length; i++) {
//     if (books[i] > books[i + 1]) {
//       let tmp = books[i];
//       books[i] = books[i + 1];
//       books[i + 1] = tmp;
//       swapsies++;
//     }
//   }
//   return swapsies > 0 ? sortBooks(books) : books;
// }
//
// console.log(sortBooks(library));


// But seriously....
// console.log(library.sort());

// But really seriously..bucket sort...
// [A-Z] = A: 65 & Z: 90
function bucketSort(books) {
  let main = [[],[],[],[],[]];
  // sort into buckets
  books.forEach(book => {
    let ref = book.charCodeAt(0)
    if (ref >= 84) {
      insert(main[4], book);
    }
    else if (ref >= 78) {
      insert(main[3], book);
    }
    else if (ref >= 72) {
      insert(main[2], book);
    }
    else if (ref >= 66) {
      insert(main[1], book);
    }
    else if (ref >= 60) {
      insert(main[0], book);
    }
  });
  var result = main.reduce((x, y) => {
    return x.concat(y);
  })
  return result;
}

// sort on the way in...
function insert(bucket, book) {
  if (bucket.length === 0) {
    bucket.push(book);
  }
  else if (bucket[0] > book) {
    bucket.unshift(book);
  }
  else if (bucket.length === 1) {
    bucket.push(book);
  }
  else {
    bucket.unshift(book);
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i] > bucket[i + 1]) {
        let tmp = bucket[i];
        bucket[i] = bucket[i + 1];
        bucket[i + 1] = tmp;
      }
    }
  }
}


console.log(bucketSort(library));
