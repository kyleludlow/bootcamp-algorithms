// Problem : Write an algorithm which searches through a 2D array, and whenever it finds a
// zero should set the entire row and column to zero.

// where each value is a single array...
// let twoDimArray = [[1],[1],[1],[1],[1],
//                    [1],[0],[1],[1],[1],
//                    [1],[1],[1],[1],[1]]
//
// function setToZero(array) {
//   let rows = 3;
//   let columns = 5;
//   let foundZero;
//   let onRow = 0;
//   let count = 0;
//   // looop over array...
//   for (let i = 0; i < array.length; i++) {
//     // if a value is 0....
//     if (count === columns) {
//       onRow++;
//       count = 0;
//     }
//     if (array[i][0] === 0) {
//       foundZero = i;
//       break;
//     }
//     count++
//   }
//   if (foundZero) {
//     // find start
//     let start = foundZero;
//     while (start >= columns) {
//       start = start - columns;
//     }
//
//     // set columns
//     for (let i = start; i < array.length; i += columns) {
//       array[i][0] = 0;
//     }
//
//     // set rows
//     let begin = onRow * columns;
//     let stop = begin + columns - 1;
//     for (let i = begin; i <= stop; i++) {
//       array[i][0] = 0;
//     }
//   }
//   return array;
// }
//
// console.log(setToZero(twoDimArray));
//
// // prints...
// [ [ 1 ],[ 0 ],[ 1 ],[ 1 ],[ 1 ],
//   [ 0 ],[ 0 ],[ 0 ],[ 0 ],[ 0 ],
//   [ 1 ],[ 0 ],[ 1 ],[ 1 ],[ 1 ] ]


// where each value (row) is an array...

let board = [[1,1,1,1],
             [1,1,1,1],
             [1,0,1,1]];

function zeroOut(array) {
  let result = [];
  let zerosAt = [];
  // create new array
  for (let value of array) {
    let found = false;
    value.forEach((x, i) => {
      if (x === 0) {
        result.push(Array(value.length).fill(0));
        zerosAt.push(i);
        found = true;
      }
    });
    if (!found) {
      result.push(value)
    }
  }
  for (let pos of zerosAt) {
    for (let index of result) {
      index[pos] = 0;
    }
  }
  return result;
}

console.log(zeroOut(board));
