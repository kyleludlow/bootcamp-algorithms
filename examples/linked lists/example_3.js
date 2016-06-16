var LinkedList = require('./linkedlist');

var list = new LinkedList();

for (let i = 0; i <= 3; i++) {
  list.insert(i, 'hello ' + i);
}

function reverseList(list) {
  let current = list.head;
  let prev = null;
  let next = current.next;
  while (current !== null) {
    list.head = current;
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  console.log(list.head);
}

reverseList(list);
