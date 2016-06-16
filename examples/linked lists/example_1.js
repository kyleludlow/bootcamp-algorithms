var LinkedList = require('./linkedlist');

var list = new LinkedList();

for (let i = 0; i <= 10; i++) {
  list.insert(i, 'hello ' + i);
}

function findMiddle(list) {
  let count = 0;
  let head = list.head;
  while (head.next !== null) {
    count++;
    head = head.next;
  }
  head = list.head;
  for (let i = 0; i <= count; i++) {
    if (i === parseInt(count / 2)) {
      return head.value;
    }
    else {
      head = head.next;
    }
  }
}
// y     y     y     y     y      y    ?
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
// x  x  x  x  x  x

console.log(findMiddle(list));
