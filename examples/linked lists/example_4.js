// Problem : Write an algorithm to find whether a linked list has a cycle
// (i.e. whether a node in the list has its next value pointing to an earlier node in the list)

var LinkedList = require('./linkedlist');

// create two lists
var list = new LinkedList();
var cycleList = new LinkedList();

for (let i = 0; i <= 3; i++) {
  list.insert(i, 'Norm ' + i);
  cycleList.insert(i, 'Cycles ' + i)
}

// have the last item in cycleList point back to the start
let x = cycleList.head;
while (x !== null) {
  if (x.next === null) {
    x.next = cycleList.head;
    break;
  }
  x = x.next;
}

// solve problem
function cycles(head) {
  let firstValue = head.value;
  while (head !== null) {
    if (head.next && head.next.value === firstValue) {
      return true;
    }
    head = head.next;
  }
  return false;
}

console.log(cycles(cycleList.head));
console.log(cycles(list.head));
