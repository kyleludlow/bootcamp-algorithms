var BinarySearchTree = function(key, value, parent) {
    this.key = key || null;
    this.value = value || null;
    this.parent = parent || null;
    this.left = null;
    this.right = null;
};

BinarySearchTree.prototype.insert = function(key, value) {
    if (this.key == null) {
        this.key = key;
        this.value = value;
    } else if (key < this.key) {
        if (this.left == null) {
            this.left = new BinarySearchTree(key, value, this);
        } else {
            this.left.insert(key, value);
        }
    } else {
        if (this.right == null) {
            this.right = new BinarySearchTree(key, value, this);
        } else {
            this.right.insert(key, value);
        }
    }
};

BinarySearchTree.prototype.get = function(key) {
    if (this.key == key) {
        return this.value;
    }
    else if (key < this.key && this.left) {
        return this.left.get(key);
    }
    else if (key > this.key && this.right) {
        return this.right.get(key);
    }
    else {
        throw new Error('Key Error');
    }
};

BinarySearchTree.prototype.remove = function(key) {
    if (this.key == key) {
        if (this.left && this.right) {
            var successor = this.right._findMin();
            this.key = successor.key;
            this.value = successor.value;
            successor.remove(successor.key);
        }
        else if (this.left) {
            this._replaceWith(this.left);
        }
        else if (this.right) {
            this._replaceWith(this.right);
        }
        else {
            this._replaceWith(null);
        }
    }
    else if (key < this.key && this.left) {
        this.left.remove(key);
    }
    else if (key > this.key && this.right) {
        this.right.remove(key);
    }
    else {
        throw new Error('Key Error');
    }
};

BinarySearchTree.prototype.treeChecker = function(key) {
    //key = current key
    //parent = previous value
    //value = current value
    // else {
    //     throw new Error('Key Error');
    // }
    // if (this.key == key) {
    //     return this.value;
    // }
    // else if (key < this.key && this.left) {
    //     return this.left.get(key);
    // }
    // else if (key > this.key && this.right) {
    //     this.right.get(key);
    // }
    if (this.key === null && this.parent === null){
        return console.log('NO KEY OR PARENT VALUES FOUND');
    } else if (this.key === key) {
        if (this.value > this.right.value || this.value < this.left.value) {
            console.log("NOT A BINARY SEARCH TREE")
        }
    }
};

var tree = new BinarySearchTree();

tree.insert(1, 8);
tree.insert(2, 7);
tree.insert(3, 5);
tree.insert(4, 9);
tree.insert(5, 12);
tree.insert(6, 18);
tree.insert(7, 11);
//console.log(tree);


console.log(tree.treeChecker(5));
