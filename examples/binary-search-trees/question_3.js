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
      value: Number(x)
    }
    result.push(output);
  })
  return result;
}

// const data = createData("Jon", "Brandon", "Rickon", "Ned", "Caitlin", "Sansa", "Aria", "Rob");
const data = createData(2,5,9,1,10,3,11);

var Tree = new BinarySearchTree(data[0].key, data[0].value);

data.forEach(block => {
  if (block !== data[0]) {
    Tree.insert(block.key, block.value);
  }
});

// console.log(util.inspect(Tree, false, null));

function findLargestValue(node) {
  
}

console.log(findLargestValue(Tree));
