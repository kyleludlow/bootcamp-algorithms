// Problem : Write an algorithm to find whether a linked list has a cycle
// (i.e. whether a node in the list has its next value pointing to an earlier node in the list)

var LinkedList = require('./linkedlist');

// create two lists
var list = new LinkedList();
var cycleList = new LinkedList();

for (let i = 0; i <= 5; i++) {
  list.insert(i, 'Norm ' + i);
  cycleList.insert(i, 'Cycles ' + i)
}

// have the last item in cycleList point back to the start to creat a circular list
let x = cycleList.head;
while (x !== null) {
  if (x.next === null) {
    x.next = cycleList.head;
    break;
  }
  x = x.next;
}

// solve problem
function cycles(head, firstVal = head.value) {
    if (head.next === null) {
      return false;
    }
    return head.next.value === firstVal ? true : cycles(head.next, firstVal);
}

console.log(cycles(cycleList.head)); // true
console.log(cycles(list.head)); // false
