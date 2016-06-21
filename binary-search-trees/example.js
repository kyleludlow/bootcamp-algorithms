var BinarySearchTree = require('./bst');

var treeOfMight = new BinarySearchTree();

function treeChecker(tree) {
    if (!tree.left && !tree.right) {
        return 'It is a BST';
    } else if (tree.left != null && tree.value < tree.left.value || tree.right != null && tree.value > tree.right.value) {
        return "NOT A BINARY SEARCH TREE because of left";
    } else {
        return treeChecker(tree.left) && treeChecker(tree.right);
    }

    //  if (tree.right != null && tree.value < tree.right.value) {
    //     return "NOT A BINARY SEARCH TREE because of right"
    // }
}
// else if (tree.right) {
//     if (tree.value < tree.left.value) {
//         return "NOT A BINARY SEARCH TREE";
//     } else {
//         return treeChecker(tree.left);
//     }
// }
// else if (tree.right) {
//     if (tree.value > tree.right.value) {
//         return "NOT A BINARY SEARCH TREE";
//     } else {
//         return treeChecker(tree.right);
//     }
// }

var Redwood = {
    key: 2,
    value: 8,
    left: {
        value: 3,
        left: {
            value: 1
        },
        right: {
            value: 6
        }
    },
    right: {
        value: 10,
        left: {
            value: 4
        },
        right: {
            value: 9
        }
    }
}
console.log(treeChecker(Redwood));

// else if (tree.right != null && tree.value > tree.right.value) {
//     return "Not a binary search tree because right value is less than parent value"
