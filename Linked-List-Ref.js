//I wanted to learn about linked lists and also have a reference for how to append and prepend items to the list

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }
  
  append(val) {
    if (!this.tail) {
      this.head = this.tail = new Node(val)
    } else {
      let oldTail = this.tail;
      this.tail = new Node(val);
      oldTail.next = this.tail;
      this.tail.prev = oldTail
    }
  }
  
  prepend(val) {
    if (!this.head) {
      this.head = this.tail = new Node(val)
    } else {
      let oldHead = this.head;
      this.head = new Node(val);
      oldHead.next = this.head;
      this.head.prev = oldHead
    }
  }
}


class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

let list = new LinkedList()

list.append(1);
list.append(2);
list.append(3);

list.prepend(0);

console.log(list);
