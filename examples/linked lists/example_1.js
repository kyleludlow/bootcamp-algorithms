// Problem: Write an algorithm to find the middle element of a linked list
// TODO: implement Tortoise and Hare method.


var LinkedList = require('./linkedlist');

var list = new LinkedList();

for (let i = 0; i < 15; i++) {
  list.insert(i, 'Item ' + i);
}

// First attempt in pairing session...
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

// Second implementation...
function findMiddlePtDeux(head) {
  let count_one = head;
  let count_two = head;
  while (true) {
    count_one = count_one.next;
    if (count_two.next && count_two.next.next) count_two = count_two.next.next;
    else break;
  }
  return count_one.value;
}
// y     y     y     y     y      y    ?
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
// x  x  x  x  x  x

// console.log(findMiddle(list));
console.log(findMiddlePtDeux(list.head));
