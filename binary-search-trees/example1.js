var BinarySearchTree = require('./binary-search-tree');

var newTree = new BinarySearchTree;

newTree.insert(1, 1);
newTree.insert(2, 2);
newTree.insert(5, 5);
newTree.insert(6, 6);
newTree.insert(24, 24);
// newTree.insert(3, 3);
// newTree.insert(9, 9);

var trueSearchTree = {
  key: 2,
  value: 2,
  parent: null,
  left: {
            key: 1,
            value: 1
  },
  right: {
            key: 3,
            value: 3,
            right: {
                      key: 4,
                      value: 4
            }
  }
}



var badSearchTree = {
  key: 9,
  value: 9,
  parent: null,
  left: {
            key: 1,
            value: 1
  },
  right: {
            key: 3,
            value: 3
  }
}



// Write an algorithm to check whether an arbitrary tree
//  is a binary search tree.

var isBST = function(node, min, max){
  // console.log('ran', node.value);
  min = min || -Infinity;
  max = max || Infinity;
  if (!node){
    return true;
  }
  if (node.value > min && node.value < max && isBST(node.left, min, node.value) && isBST(node.right, node.value, max) ){
    return true;
  } else {
    return false;
  }
};

function wtf(node) {
  console.log('ran')
 if (!node) {
   return 0;
 }
 return wtf(node.left) > wtf(node.right) ? wtf(node.left) + 1 : wtf(node.right) + 1;
}



// console.log(isBST(badSearchTree));
// console.log(isBST(trueSearchTree));


console.log(wtf(trueSearchTree));
