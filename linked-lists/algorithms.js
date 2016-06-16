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
santasList.insert(6,'swag');
santasList.insert(7,null);

// santasList.insert(6,null);

// //
// BRUTE FORCE
// var findMiddle = function(list) {
//   length = list.length;
//   middleLength = length / 2;
//   console.log(middleLength);
//
//   if (middleLength * 2 === length) {
//
//     console.log(santasList.get(middleLength - 1), santasList.get(middleLength));
//   } else {
//     console.log(santasList.get(middleLength - 1));
//   }
//
// };
// findMiddle(santasList);

// santasList.head.next.next.next[1].value = santasList.head.next.next.value;
// console.log(JSON.stringify(santasList, null, ' '));

// easier, softer way
var findMiddle2 = function(list) {

  var i = 1;
  while (list._find(i -1).next !== null){
    i++;
  }
  middleLength = i / 2;
  if ((middleLength | 0) === middleLength){
    console.log(santasList.get(middleLength - 1), santasList.get(middleLength));
  } else {
    console.log(santasList.get(middleLength - 1));
  }
};

// x x x x x
// 1 2 3 4 5 6 7 8 9 10
// y   y   y   y   y    ?
// findMiddle2(santasList);


var thirdFromLast = function(list) {

  var i = 0;
  while (list._find(i ).next !== null){
    i++;
  }

  return list.get(i-3);
};


// console.log(thirdFromLast(santasList));


var reverseList = function(list) {
var newList = new LinkedList;
  var i = 0;
  var j = 0;
  while (list._find(i).next !== null){
    i++;
  }
  for (i; i>= 0; i--){
    newList.insert(j,list.get(i));
    j++;
  }
return newList;

};


// console.log(reverseList(santasList));


var doesItCycle = function(list) {
var newList = new LinkedList;
  var i = 1;
  var j = 0;
  while (list._find(i).next !== null){
    if (list._find(i).next === list.get(j)){
      return true;
    }
    i++;
    j++;

  }
  return false;
}

console.log(doesItCycle(santasList));
