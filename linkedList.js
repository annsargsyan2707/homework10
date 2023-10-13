class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  getSize() {
    return this.length;
  }
  isEmpty() {
    return !this.length;
  }
  printList() {
    let current = this.head;
    let list = [];
    while (current) {
      list.push(current.value);
      current = current.next;
    }
    console.log(list.join(" "));
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  insert(index, data) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.append(data);
    if (index === 0) return this.prepend(data);
    const newNode = new Node(data);

    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  removeAt(index) {
    if (index < 0 || index >= this.length) return null;
    if (!this.head) return null;
    if (this.length === 0) {
      this.tail = null;
    }
    if (index === 0) {
      let currentHead = this.head;
      this.head = currentHead.next;
      this.length--;
      return currentHead;
    }

    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }
  remove(data) {
    if (!this.head) return null;
    if (data === this.head.value) return this.removeAt(0);

    if (data === this.tail.value) return this.removeAt(this.length - 1);
    let current = this.head;

    let count = 0;
    let res = null;
    while (this.length - 2) {
      current = current.next;

      count++;
      this.length--;
      if (current.value === data) {
        res = count;
        break;
      }
    }
    if (res) return this.removeAt(res);
  }
}
const list = new LinkedList();
list.append(1);
list.append(2);

list.prepend(0);
list.append(50);
list.printList();
//list.insert(3, 3);
//console.log(list.get(0));
//console.log(list.isEmpty());
console.log(list.remove(1));
list.printList();
