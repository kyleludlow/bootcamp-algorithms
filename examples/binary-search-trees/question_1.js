var BinarySearchTree = require('./tree');
var not_binary = require('./non_binary_tree');

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

const data = createData("Harry","Ron","Hermione","Snape","Dumbledore");

var Tree = new BinarySearchTree(data[0].key, data[0].value);

data.forEach(block => {
  if (block !== data[0]) {
    Tree.insert(block.key, block.value);
  }
});

console.log(Tree);

function isBinary(tree) {
  if (tree.left && tree.right) {
    if (tree.key < tree.left.key || tree.key > tree.right.key) {
      return false
    }
    else {
      return isBinary(tree.left) && isBinary(tree.right);
    }
  }
  else if (tree.left) {
    if (tree.key < tree.left.key) {
      return false
    }
    else {
      return isBinary(tree.left);
    }
  }
  else if (tree.right) {
    if (tree.key > tree.right.key) {
      return false;
    }
    else {
      return isBinary(tree.right);
    }
  }
  return true;
}

console.log(isBinary(Tree));
