var BinarySearchTree = require('./tree');
var util = require('util');

function createData(...data) {
  var result = []
  data.forEach(x => {
    let hash = null;
    x = x.toString();
    for (let i = 0; i < x.length; i++) {
      hash += x.charCodeAt(i);
    }
    let output = {
      key: hash,
      value: x
    }
    result.push(output);
  })
  return result;
}

const data = createData("Linda","Bob","Gene","Louise","Tina", "Mort", "Teddy", "Gayle","Fischoeder");

var Tree = new BinarySearchTree(data[0].key, data[0].value);

data.forEach(block => {
  if (block !== data[0]) {
    Tree.insert(block.key, block.value);
  }
});

console.log(util.inspect(Tree, false, null));

// The old way.....
// function howDeepIsYourTree(tree, count = 1, totals = []) {
//   if (!tree.left && !tree.right) {
//     let biggest = 0;
//     for (let i = 0; i < totals.length; i++) {
//       if (totals[i] > biggest) {
//         biggest = totals[i];
//       }
//     }
//     return biggest;
//   }
//   else if (tree.left && tree.right) {
//     count += 1;
//     totals.push(count);
//     return howDeepIsYourTree(tree.left, count, totals) && howDeepIsYourTree(tree.right, count, totals);
//   }
//   else if (tree.left) {
//     count += 1;
//     totals.push(count);
//     return howDeepIsYourTree(tree.left, count, totals);
//   }
//   else if (tree.right) {
//     count += 1;
//     totals.push(count);
//     return howDeepIsYourTree(tree.right, count, totals);
//   }
// }


// The Casey way....
function wtf(node) {
  if (node === null) {
    return 0
  }
  let left = wtf(node.left);
  let right = wtf(node.right);
  return left > right ? left + 1 : right + 1;
}

// console.log(howDeepIsYourTree(Tree));
console.log(wtf(Tree));
