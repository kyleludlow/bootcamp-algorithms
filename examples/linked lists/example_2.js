// Problem : Write an algorithm to find the third element from the end of a linked list

var LinkedList = require('./linkedlist');

var list = new LinkedList();

for (let i = 0; i <= 10; i++) {
  list.insert(i, 'hello ' + i);
}

function findThirdToLast(list) {
  let count = 0;
  let head = list.head;
  while (head.next !== null) {
    count++;
    head = head.next;
  }
  head = list.head;
  for (let i = 0; i <= count; i++) {
    if (i === (count - 3)) {
      return head.value;
    }
    else {
      head = head.next;
    }
  }
}


console.log(findThirdToLast(list));
