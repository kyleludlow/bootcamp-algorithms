//TODO: Write an algorithm to find the middle element of a linked list

var LinkedList = function() {
    this.length = 0;
    this.head = null;
};

LinkedList.prototype.insert = function(index, value) {
    if (index < 0 || index > this.length) {
        throw new Error('Index error');
    }

    var newNode = {
        value: value
    };

    if (index == 0) {
        newNode.next = this.head;
        this.head = newNode;
    }
    else {
        // Find the node which we want to insert after
        var node = this._find(index - 1);
        newNode.next = node.next;
        node.next = newNode;
    }

    this.length++;
};

LinkedList.prototype._find = function(index) {
    var node = this.head;
    for (var i=0; i<index; i++) {
        node = node.next;
    }
    return node;
};

LinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.length) {
        throw new Error('Index error');
    }

    return this._find(index).value;
};

LinkedList.prototype.remove = function(index) {
    if (index < 0 || index >= this.length) {
        throw new Error('Index error');
    }

    if (index == 0) {
        this.head = this.head.next;
    }
    else {
        // Find the node before the one we want to remove
        var node = this._find(index - 1);
        node.next = node.next.next;
    }

    this.length--;
};
var santasList = new LinkedList();

santasList.insert(0,'zelda');
santasList.insert(1,'core i5 6500k');
santasList.insert(2,'mini iTX mobo');
santasList.insert(3,'unlimited EZ Pass');
santasList.insert(4,'free gas for life');
santasList.insert(5,'unlimited data');
santasList.insert(6,null);
var printList = function(){
    for (var i = 0; i < 7; i++){
        console.log(santasList.get(i));
    }
}
//printList();
console.log(santasList);
santasList.prototype.middleRemove = function(index){
    var length = this.length;
    var head = this.head;
    length ++;
    if (length % 2 === 0) {
    head = head.next;
    }
}
santasList.middleRemove(2);
